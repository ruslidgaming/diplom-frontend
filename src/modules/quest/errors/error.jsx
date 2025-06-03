import { useParams } from 'react-router-dom';
import Error404 from './components/Error404';
import Error403 from './components/Error403';
import { Header } from '../../layout/components/header';
import { Footer } from '../../layout/components/footer';


export default function Errors() {
    const { codeNum } = useParams();


    function errorCode(code) {
        switch (code) {
            case "404":
                return <Error404 />;
            case "403":
                return <Error403 />;
            default:
                return <Error404 />;
        }
    }

    return (
        <div className='error__page'>
            <Header />
            <div className="error">
                {errorCode(codeNum ?? "")}
            </div>
            <Footer />
        </div>
    );
}
