import { observer } from "mobx-react-lite";
import logo from "../../../assets/img/logo.svg"
import telegram from "../../../assets/img/media/telegram.png"
import vk from "../../../assets/img/media/vk.png"
import rutube from "../../../assets/img/media/rutube.png"
import { Link } from "react-router-dom";

export const Footer = observer(() => {
    return <>
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__left">
                    <div className="footer__logo logo">
                        <div className="logo__img">
                            <img src={logo} alt="logo" />
                        </div>
                        <p className="logo__text">ФЕНЕК</p>
                    </div>
                    <p className="footer__text">@ФЕНЕК. Все права <br /> защищены</p>
                </div>

                <div className="footer__item item-footer">
                    <div className="item-footer__title">О компании</div>
                    <Link to="#" className="item-footer__link">Примеры</Link>
                    <Link to="#" className="item-footer__link">О платформе</Link>
                    <Link to="#" className="item-footer__link">Контакты</Link>
                    <Link to="#" className="item-footer__link">Тарифы</Link>
                </div>

                <div className="footer__item item-footer">
                    <div className="item-footer__title">Контакты</div>
                    <a href="tel:+79963363058" className="item-footer__link">+7(996)-336-3058</a>
                    <a href="mailto:fenek@mail.ru" className="item-footer__link">fenek@mail.ru</a>
                    <div className="item-footer__icons">
                        <a href="https://vk.com/aziz_man" className="item-footer__icon">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="@AZIZ_006" className="item-footer__icon">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="https://rutube.ru/video/872da4e472716384f7f99fef45d7c3fd/?r=wd" className="item-footer__icon">
                            <img src={rutube} alt="rutube" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>;
})