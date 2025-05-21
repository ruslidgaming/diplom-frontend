import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import ProfileIcon from "../../layout/profileComponents/profileIcons";
import LineChart from "./components/statistic";
import { useState } from "react";

import foto from "../../../assets/img/banner.png";

function Courses() {


    const [staticSections, setStaticSections] = useState("");

    const CheckSetStaticSections = (name) => {
        setStaticSections(staticSections === name ? "" : name)
    }

    return <>
        <div className="courses">
            <div className="courses__header">
                <DivInput className="courses__search search" >
                    <input type="text" placeholder="Название училища" />
                    {/* <input type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="Название училища" /> */}

                    <div className="search__icon">
                        <Icon name={"search"} />
                    </div>
                </DivInput>

                <Link className="courses__add" to={"/admin/addcourse"}>
                    <Icon className="courses__add__icon" name={"plus"} />
                    <span>Добавить</span>
                </Link>
            </div>

            <div className="courses__items">
                <div className="courses__item item-course">
                    <div className="item-course__img">
                        <img src={foto} alt="" />
                    </div>
                    <h5 className="item-course__name">Социальная психология</h5>
                    <p className="item-course__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis eligendi temporibus minus quibusdam laborum!</p>
                    <div className="item-course__btns">
                        <Link className="item-course__bnt _btn _blue" to={"/admin/courses/edit"}>Редактировать</Link>
                        <button className="item-course__bnt _btn _red">Удалить</button>
                    </div>
                </div>
                <div className="courses__item item-course">
                    <div className="item-course__img">
                        <img src={foto} alt="" />
                    </div>
                    <h5 className="item-course__name">Социальная психология</h5>
                    <p className="item-course__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis eligendi temporibus minus quibusdam laborum!</p>
                    <div className="item-course__btns">
                        <Link className="item-course__bnt _btn _blue" to={"/admin/courses/edit"}>Редактировать</Link>
                        <button className="item-course__bnt _btn _red">Удалить</button>
                    </div>
                </div>
                <div className="courses__item item-course">
                    <div className="item-course__img">
                        <img src={foto} alt="" />
                    </div>
                    <h5 className="item-course__name">Социальная психология</h5>
                    <p className="item-course__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis eligendi temporibus minus quibusdam laborum!</p>
                    <div className="item-course__btns">
                        <Link className="item-course__bnt _btn _blue" to={"/admin/courses/edit"}>Редактировать</Link>
                        <button className="item-course__bnt _btn _red">Удалить</button>
                    </div>
                </div>
                <div className="courses__item item-course">
                    <div className="item-course__img">
                        <img src={foto} alt="" />
                    </div>
                    <h5 className="item-course__name">Социальная психология</h5>
                    <p className="item-course__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis eligendi temporibus minus quibusdam laborum!</p>
                    <div className="item-course__btns">
                        <Link className="item-course__bnt _btn _blue" to={"/admin/courses/edit"}>Редактировать</Link>
                        <button className="item-course__bnt _btn _red">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default observer(Courses);