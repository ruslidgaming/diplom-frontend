import { observer } from "mobx-react-lite";
import logo from "../../../assets/img/logo.svg"

export const HeaderProfile = observer(() => {
    return <>
        <header className="profile__header header-profile">
            <div className="header-profile__logo logo">
                <div className="logo__img">
                    <img src={logo} alt="logo" />
                </div>
                <p className="logo__text">ФЕНЕК</p>
            </div>

            <div className="header-profile__user">
                <div className="header-profile__foto">
                    <img src={logo} alt="" />
                </div>
                <div className="header-profile__name">X’eriya Ponald</div>
            </div>
        </header>
    </>;
})