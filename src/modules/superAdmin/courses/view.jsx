import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import ProfileIcon from "../../layout/profileComponents/profileIcons";
import LineChart from "./components/statistic";
import { useState } from "react";
import model from "./models/listuser-model";
function StatisticsCourses() {


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
                <div className={`static__cart cart-static ${staticSections == 'course' && "_active"}`} onClick={() => CheckSetStaticSections('course')}>
                    <div className="cart-static__icon">
                        <ProfileIcon name="admin" />
                    </div>
                    <div className="cart-static__info">
                        <div className="cart-static__name">Кол-во курсов</div>
                        <div className="cart-static__count">420</div>
                    </div>
                </div>
                <div className={`static__cart cart-static ${staticSections == 'lessons' && "_active"}`} onClick={() => CheckSetStaticSections('lessons')}>
                    <div className="cart-static__icon">
                        <ProfileIcon name="users" />
                    </div>
                    <div className="cart-static__info">
                        <div className="cart-static__name">Кол-во уроков</div>
                        <div className="cart-static__count">5503</div>
                    </div>
                </div>
            </div>

            {(staticSections == "" || staticSections == 'course') &&
                <div className="static__section">
                    <div className="static__title">Кол-во курсов</div>

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

            {(staticSections == "" || staticSections == 'lessons') &&
                <div className="static__section">
                    <div className="static__title">Кол-во уроков</div>

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
export default observer(StatisticsCourses);