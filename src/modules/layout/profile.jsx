import { Outlet, useLocation } from "react-router-dom"
import { HeaderProfile } from "./profileComponents/headerProfile"
import { Footer } from "./components/footer"
import ProfileIcon from "./profileComponents/profileIcons"
import { use, useEffect, useState } from "react"

import { sidebarUserData } from "./profileData/sidebar-user-data";
import { sidebarSuperData } from "./profileData/sidebar-super-data";
import { sidebarAdminData } from "./profileData/sidebar-admin-data";
import { Link } from "react-router-dom"
import { useAuth } from "../../core/hoc/AuthProvider"
import { getProfileTitle, ProfileTitles } from "./data/ProfileTitles"


export default function Profile() {

    const [panelData, setPanelData] = useState([]);
    const [active, setActive] = useState(1);
    const localUrl = useLocation()

    const { user, signout } = useAuth();

    useEffect(() => {
        if (user.role === 'mentor') {
            setPanelData([{
                type: "link",
                icon: "cours",
                name: "Курсы",
                link: "/mentor",
            }])
        }
        if (user.role === 'student') {
            console.log(user)
            const updatedSidebar = sidebarUserData.map(item => ({
                ...item,
                link: `/student/${user.admin_id}${item.link.replace('/student', '')}`
            }));

            setPanelData(updatedSidebar);
        }
        if (user.role === 'super') {
            setPanelData(sidebarSuperData)
        }
        if (user.role === 'admin') {
            setPanelData(sidebarAdminData)
        }
    }, [])




    return (
        <>
            <div className="profile">
                <HeaderProfile name={user.name} />

                <div className="profile__main">
                    <div className="profile__panel panel-profile">
                        <div className="panel-profile__items">

                            
                            {panelData.map((item, i) => {
                                if (item.type == "title") {
                                    return (
                                        <div className="panel-profile__title" key={i}>{item.name}</div>
                                    )
                                } else if (item.type == "link") {
                                    return (
                                        <Link to={item.link != "/page" ? item.link : item.link + "/" + user.id} target={item.new ? "_blank" : ""} className={`panel-profile__item item-profile ${localUrl.pathname == item.link ? "_active" : ""}`} onClick={() => setActive(i)} >
                                            <div className="item-profile__icon">
                                                <ProfileIcon name={item.icon} />
                                            </div>
                                            <p className="item-profile__name">{item.name}</p>
                                        </Link>
                                    )
                                }
                            })}

                            <div className={`panel-profile__item item-profile`} onClick={signout}>
                                <div className="item-profile__icon">
                                    <ProfileIcon name="logout" />
                                </div>
                                <p className="item-profile__name">Выйти</p>
                            </div>

                        </div>
                    </div>
                    <div className="profile__window window-profile">
                        <div className="window-profile__title h4">{getProfileTitle(localUrl.pathname)}</div>
                        <div className="window-profile__bady">
                            <Outlet />
                        </div>
                    </div>
                </div>

            </div >
            <Footer />
        </>
    )
}