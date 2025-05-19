import { observer } from "mobx-react-lite";
import logo from "../../../assets/img/logo.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = observer(() => {

    const [navSwitcher, setNavSwitcher] = useState(false)

    return <>
        <header className="header">
            <div className="header__container container">
                <div className="header__logo logo">
                    <div className="logo__img">
                        <img src={logo} alt="logo" />
                    </div>
                    <p className="logo__text">ФЕНЕК</p>
                </div>

                <div className="nav__open" onClick={() => setNavSwitcher(!navSwitcher)}>
                    <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.682495" width="39" height="5" rx="2.5" fill="#1E5EFF" />
                        <rect y="8.6825" width="39" height="5" rx="2.5" fill="#1E5EFF" />
                        <rect y="16.6825" width="39" height="5" rx="2.5" fill="#1E5EFF" />
                    </svg>
                </div>

                <div className="header__nav nav">
                    <Link to="#" className="nav__item">Примеры</Link>
                    <Link to="#" className="nav__item">О платформе</Link>
                    <Link to="#" className="nav__item">Контакты</Link>
                    <Link to="#" className="nav__item">Тарифы</Link>
                    <Link to="/login" className="nav__button _btn _blue">Войти</Link>
                </div>
            </div>
            <div className={navSwitcher ? "nav__panel nav__pannel-active" : "nav__panel"}>
                <div className="nav__body">
                    <div className="nav__close" onClick={() => setNavSwitcher(!navSwitcher)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="28.0205" width="5" height="39" rx="2.5" transform="rotate(45 28.0205 0)" fill="white" />
                            <rect x="0.443359" y="3.53552" width="5" height="39" rx="2.5" transform="rotate(-45 0.443359 3.53552)" fill="white" />
                        </svg>
                    </div>

                    <Link to="#" className="nav__item">Примеры</Link>
                    <Link to="#" className="nav__item">О платформе</Link>
                    <Link to="#" className="nav__item">Контакты</Link>
                    <Link to="#" className="nav__item">Тарифы</Link>
                    <Link to="/login" className="nav__button _btn _blue">Войти</Link>
                </div>
            </div>
        </header>
    </>;
})