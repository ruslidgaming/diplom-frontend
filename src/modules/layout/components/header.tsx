import { observer } from "mobx-react-lite";
import logo from "../../../assets/img/logo.svg"

export const Header = observer(() => {
    return <>
        <header className="header">
            <div className="header__container container">
                <div className="header__logo logo">
                    <div className="logo__img">
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="logo__text">ФЕНЕК</p>
                </div>

                <div className="header__nav nav">
                    <a href="#" className="nav__item">Примеры</a>
                    <a href="#" className="nav__item">О платформе</a>
                    <a href="#" className="nav__item">Контакты</a>
                    <a href="#" className="nav__item">Тарифы</a>
                    <a href="#" className="nav__button _btn _blue">Войти</a>
                </div>
            </div>
        </header>
    </>;
})