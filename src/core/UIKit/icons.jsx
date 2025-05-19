import eyeLlash from './icons/eye-slash.svg'
import eye from './icons/eye.svg'

export default function Icon({ name }) {
    switch (name) {
        case 'eye': return <img className="icon" src={eye} />;
        case 'eye-slash': return <img className="icon" src={eyeLlash} />;
        default: return <div />;
    }
}