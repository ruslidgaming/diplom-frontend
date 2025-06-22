import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import ProfileIcon from "../../layout/profileComponents/profileIcons";
import LineChart from "./components/statistic";
import { useState } from "react";
import { platformStats } from "./components/dataStatistic";
import model from "./models/listuser-model";
function StatisticsUsers() {

    const { graphSectionsAdmin,
        graphSectionsMentor,
        graphSectionsUser,
        filterTypeAdmin,
        filterTypeMentor,
        filterTypeUser,
        setGraphSectionsAdmin,
        setGraphSectionsMentor,
        setGraphSectionsUser } = model;

    const [staticSections, setStaticSections] = useState("");

    const CheckSetStaticSections = (name) => {
        setStaticSections(staticSections === name ? "" : name)
    }

    return <>
        <div className="static-many static">
            <div className="static__title">За текущий месяц</div>
            <div className="static__carts">
                <div className={`static__cart cart-static ${staticSections == 'admin' && "_active"}`} onClick={() => CheckSetStaticSections('admin')}>
                    <div className="cart-static__icon">
                        <ProfileIcon name="admin" />
                    </div>
                    <div className="cart-static__info">
                        <div className="cart-static__name">Кол-во админов</div>
                        <div className="cart-static__count">{platformStats.cards.admins.total}</div>
                    </div>
                </div>
                <div className={`static__cart cart-static ${staticSections == 'mentors' && "_active"}`} onClick={() => CheckSetStaticSections('mentors')}>
                    <div className="cart-static__icon">
                        <ProfileIcon name="mentors" />
                    </div>
                    <div className="cart-static__info">
                        <div className="cart-static__name">Кол-во менторов</div>
                        <div className="cart-static__count">{platformStats.cards.mentors.total}</div>
                    </div>
                </div>
                <div className={`static__cart cart-static ${staticSections == 'users' && "_active"}`} onClick={() => CheckSetStaticSections('users')}>
                    <div className="cart-static__icon">
                        <ProfileIcon name="users" />
                    </div>
                    <div className="cart-static__info">
                        <div className="cart-static__name">Кол-во учеников</div>
                        <div className="cart-static__count">{platformStats.cards.users.total}</div>
                    </div>
                </div>
            </div>

            {(staticSections == "" || staticSections == 'admin') &&
                <div className="static__section">
                    <div className="static__title">Кол-во админов</div>

                    <div className="static__btns">
                        <div className="static__btn-text">Группировать по </div>
                        <div className={`static__btn ${filterTypeAdmin == "daily" && "_active"}`} onClick={() => setGraphSectionsAdmin('daily')}>дням</div>
                        <div className={`static__btn ${filterTypeAdmin == "weekly" && "_active"}`} onClick={() => setGraphSectionsAdmin('weekly')}>неделям</div>
                        <div className={`static__btn ${filterTypeAdmin == "monthly" && "_active"}`} onClick={() => setGraphSectionsAdmin('monthly')}>меясцам</div>
                        <div className={`static__btn ${filterTypeAdmin == "yearly" && "_active"}`} onClick={() => setGraphSectionsAdmin('yearly')}>годам</div>
                    </div>

                    <div className="static__chart">
                        <LineChart data={JSON.parse(JSON.stringify(graphSectionsAdmin))} />
                    </div>
                </div>
            }

            {(staticSections == "" || staticSections == 'mentors') &&
                <div className="static__section">
                    <div className="static__title">Кол-во менторов</div>

                    <div className="static__btns">
                        <div className="static__btn-text">Группировать по </div>
                        <div className={`static__btn ${filterTypeMentor == "daily" && "_active"}`} onClick={() => setGraphSectionsMentor('daily')}>дням</div>
                        <div className={`static__btn ${filterTypeMentor == "weekly" && "_active"}`} onClick={() => setGraphSectionsMentor('weekly')}>неделям</div>
                        <div className={`static__btn ${filterTypeMentor == "monthly" && "_active"}`} onClick={() => setGraphSectionsMentor('monthly')}>меясцам</div>
                        <div className={`static__btn ${filterTypeMentor == "yearly" && "_active"}`} onClick={() => setGraphSectionsMentor('yearly')}>годам</div>
                    </div>

                    <div className="static__chart">
                        <LineChart data={JSON.parse(JSON.stringify(graphSectionsMentor))} />
                    </div>
                </div>
            }

            {(staticSections == "" || staticSections == 'users') &&
                <div className="static__section">
                    <div className="static__title">Кол-во учеников</div>

                    <div className="static__btns">
                        <div className="static__btn-text">Группировать по </div>
                        <div className={`static__btn ${filterTypeUser == "daily" && "_active"}`} onClick={() => setGraphSectionsUser('daily')}>дням</div>
                        <div className={`static__btn ${filterTypeUser == "weekly" && "_active"}`} onClick={() => setGraphSectionsUser('weekly')}>неделям</div>
                        <div className={`static__btn ${filterTypeUser == "monthly" && "_active"}`} onClick={() => setGraphSectionsUser('monthly')}>меясцам</div>
                        <div className={`static__btn ${filterTypeUser == "yearly" && "_active"}`} onClick={() => setGraphSectionsUser('yearly')}>годам</div>
                    </div>

                    <div className="static__chart">
                        <LineChart data={JSON.parse(JSON.stringify(graphSectionsUser))} />
                    </div>
                </div>
            }

        </div>
    </>
}
export default observer(StatisticsUsers);