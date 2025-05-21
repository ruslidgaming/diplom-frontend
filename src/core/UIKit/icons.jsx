import eyeLlash from './icons/eye-slash.svg'
import eye from './icons/eye.svg'

export default function Icon({ name }) {
    switch (name) {
        case 'eye': return <img className="icon" src={eye} />;
        case 'eye-slash': return <img className="icon" src={eyeLlash} />;
        case "search": return <>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3C14.6421 3 18 6.35786 18 10.5C18 12.2101 17.4276 13.7866 16.464 15.0483L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L15.0483 16.464C13.7866 17.4276 12.2101 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3ZM10.5 5C7.46243 5 5 7.46243 5 10.5C5 13.5376 7.46243 16 10.5 16C11.8511 16 13.0885 15.5128 14.0459 14.7045C14.091 14.5536 14.1738 14.412 14.2929 14.2929C14.412 14.1738 14.5536 14.091 14.7041 14.0446C15.5128 13.0885 16 11.8511 16 10.5C16 7.46243 13.5376 5 10.5 5Z" fill="#7E84A3" />
            </svg>
        </>;
        case "plus": return <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V10.999L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L13 12.999V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V12.999L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11L11 10.999V6C11 5.44772 11.4477 5 12 5Z" fill="white" />
            </svg>
        </>;
        default: return <div />;
    }
}