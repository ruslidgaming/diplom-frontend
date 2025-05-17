import WebSocketAsPromised from 'websocket-as-promised';

interface BaseMessage {
    command_type: string;
    user_id: number;
}

interface SubscriptionMessage extends BaseMessage {
    command_type: 'subscribe';
    paths: string[];
}

interface UnsubscribeMessage extends BaseMessage {
    command_type: 'unsubscribe';
    paths: string[];
}

interface IncomingMessage {
    guid: string;
    path: string;
    data: string;
    timestamp: number;
}

type EventHandler = (data: any) => void;

export default class WebSocketClient {
    private wsp: WebSocketAsPromised;
    private subscriptions: Map<string, SubscriptionMessage>;
    private eventHandlers: Map<string, EventHandler>;

    constructor(url: string) {
        this.wsp = new WebSocketAsPromised(url, {
            packMessage: (data: any) => JSON.stringify(data),
            unpackMessage: (data: any) => JSON.parse(data),
        });
        this.wsp.onMessage.addListener((message: any) => {
            let parsedMessage: IncomingMessage | null = null;

            if (typeof message === 'string') {
                try {
                    parsedMessage = JSON.parse(message);
                } catch (error) {
                    console.error('Failed to parse incoming message:', message);
                    return;
                }
            }

            if (parsedMessage && parsedMessage.path) {
                const handler = this.eventHandlers.get(parsedMessage.path);

                if (handler) {
                    try {
                        const data = JSON.parse(parsedMessage.data);
                        handler(data);
                    } catch (error) {
                        console.error('Failed to parse event data:', parsedMessage.data);
                    }
                } else {
                    console.warn(`No handler for path: ${parsedMessage.path}`);
                }
            } else {
                console.warn('Received unknown message:', message);
            }
        });
        this.subscriptions = new Map();
        this.eventHandlers = new Map();
    }

    async connect() {
        await this.wsp.open();
        console.log('WebSocket connected');
    }

    subscribe(user_id: number, paths: string[], handler: EventHandler) {
        const message: SubscriptionMessage = {
            command_type: 'subscribe',
            user_id,
            paths,
        };
        paths.forEach(path => {
            this.subscriptions.set(path, message);
            this.eventHandlers.set(path, handler);
        });
        console.warn("Subsribed for ", paths)
        this.wsp.send(JSON.stringify(message));
    }

    unsubscribe(user_id: number, paths: string[]) {
        const message: UnsubscribeMessage = {
            command_type: 'unsubscribe',
            user_id,
            paths,
        };
        paths.forEach(path => {
            this.subscriptions.delete(path);
            this.eventHandlers.delete(path);
        });
        this.wsp.send(JSON.stringify(message));
    }

    addOnMessageListener(path: string, handler: EventHandler) {
        this.eventHandlers.set(path, handler);
    }

    removeOnMessageListener(path: string) {
        this.eventHandlers.delete(path);
    }

    sendMessage(message: BaseMessage & Partial<any>) {
        const messageString = JSON.stringify(message);
        this.wsp.send(messageString);
    }

    onMessage() {
        this.wsp.onMessage.addListener((message: any) => {
            const parsedMessage: IncomingMessage = message;
            const handler = this.eventHandlers.get(parsedMessage.path);
            if (handler) {
                const data = JSON.parse(parsedMessage.data);
                handler(data);
            } else {
                console.warn(`No handler for path: ${parsedMessage.path}`);
            }
        });
    }

    // Disconnect from WebSocket server
    async disconnect() {
        await this.wsp.close();
        console.log('WebSocket disconnected');
    }
}
