import { observer } from 'mobx-react-lite';
import { useState } from 'react';

const SecretField = observer(({ value }) => {
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);




    const copyToClipboard = () => {
        navigator.clipboard.writeText(value)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
    };

    return (
        <>
            <p>{visible ? value : '*'.repeat(value?.length || 0)}</p>
            <button className="item-metodist__copy"
                onClick={copyToClipboard}
                disabled={!value}
            >
                {copied ?
                    <>
                        <svg width="24" height="24" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6289 35.9977C14.0383 35.9977 12.4478 35.4062 11.1921 34.1389L2.82085 25.6897C0.393189 23.2395 -0.426902 21.4479 2.00076 18.9977C4.42842 16.5474 6.974 18.2545 9.40166 20.7047L15.6289 27.9977L40 3.99753C42.4277 1.54728 44.0723 -0.450721 46.5 1.99953C48.9277 4.44978 47.607 6.34119 45.1794 8.79144L20.0656 34.1389C18.8099 35.4062 17.2194 35.9977 15.6289 35.9977Z" fill="#292D32" />
                        </svg>
                    </>
                    :
                    <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1 22.75H6.9C2.99 22.75 1.25 21.01 1.25 17.1V12.9C1.25 8.99 2.99 7.25 6.9 7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V17.1C16.75 21.01 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.8 2.75 12.9V17.1C2.75 20.2 3.8 21.25 6.9 21.25H11.1C14.2 21.25 15.25 20.2 15.25 17.1V12.9C15.25 9.8 14.2 8.75 11.1 8.75H6.9Z" fill="#6D6D6D" />
                            <path d="M17.1 16.75H16C15.59 16.75 15.25 16.41 15.25 16V12.9C15.25 9.8 14.2 8.75 11.1 8.75H8C7.59 8.75 7.25 8.41 7.25 8V6.9C7.25 2.99 8.99 1.25 12.9 1.25H17.1C21.01 1.25 22.75 2.99 22.75 6.9V11.1C22.75 15.01 21.01 16.75 17.1 16.75ZM16.75 15.25H17.1C20.2 15.25 21.25 14.2 21.25 11.1V6.9C21.25 3.8 20.2 2.75 17.1 2.75H12.9C9.8 2.75 8.75 3.8 8.75 6.9V7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V15.25Z" fill="#6D6D6D" />
                        </svg>

                    </>
                }
            </button>
        </>
    );
});

export default SecretField;