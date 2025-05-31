import { observer } from "mobx-react-lite";
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';


function Designer() {

    return (
        <StudioEditor
            options={{
                licenseKey: 'bc3c14e6d37242faa73536baec79d76837add3fe1f714633bc611baf60bda4ee',
                project: {
                    type: 'web',
                    // TODO: replace with a unique id for your projects. e.g. an uuid
                    id: 'project-' + Date.now(),
                },
                identity: {
                    // TODO: replace with a unique id for your end users. e.g. an uuid
                    id: 'MY_ID'
                },
                pages: false,
                assets: {
                    storageType: 'cloud'
                },
                storage: {
                    type: 'cloud',
                }
            }}
        />
    );
}
export default observer(Designer);
