import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import ProfileIcon from "../../layout/profileComponents/profileIcons";
import LineChart from "./components/statistic";
import { useEffect, useState } from "react";
import { incomeStatistics } from "./components/dataStatistic";
import model from "./models/login-model";
function StatisticsMany() {

    const [staticSections, setStaticSections] = useState("");

    const CheckSetStaticSections = (name) => {
        setStaticSections(staticSections === name ? "" : name)
    }

    const { filterTypeAdmin, filterTypeUser, graphSectionsAdmin,
        graphSectionsUser,
        setGraphSectionsAdmin,
        setGraphSectionsUser } = model;

    return <>
        <div className="static-many static">
            <div className="static__title">За текущий месяц</div>
            <div className="static__carts">
                <div className={`static__cart cart-static ${staticSections == 'users' && "_active"}`} onClick={() => CheckSetStaticSections('users')}>
                    <div className="cart-static__icon">
                        <ProfileIcon name="users" />
                    </div>
                    <div className="cart-static__info">
                        <div className="cart-static__name">Доход от учеников</div>
                        <div className="cart-static__count">85 050 ₽</div>
                    </div>
                </div>
            </div>

            <div className="static__section">
                <div className="static__title">Доход от учеников</div>

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
        </div>
    </>
}
export default observer(StatisticsMany);