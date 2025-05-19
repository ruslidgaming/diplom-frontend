export default function Icon({ name }) {
    switch (name) {
        case 'eye': return <img className="icon" src={require('./icons/eye.svg')} />;
        case 'eye-slash': return <img className="icon" src={require('./icons/eye-slash.svg')} />;
        default: return <div />;
    }
}