import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import { useEffect, useState } from "react";

import foto from "../../../assets/img/banner.png";
import courseModal from "./models/course-modal";
import { useAuth } from "../../../core/hoc/AuthProvider";

function Courses() {

    const { getCourseAllData, courseCatalogList } = courseModal
    const { user } = useAuth();

    useEffect(() => {
        getCourseAllData(user.id)
        console.log(courseCatalogList);
    }, [])

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

                <a className="courses__add" href={"/profile/admin/courses/form"}>
                    <Icon className="courses__add__icon" name={"plus"} />
                    <span>Добавить</span>
                </a>
            </div>

            <div className="courses__items">
                <div className="courses__item item-course">
                    <div>
                        <div className="item-course__img">
                            <img src={foto} alt="" />
                        </div>
                        <h5 className="item-course__name">Социальная психология</h5>
                        <p className="item-course__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis eligendi temporibus minus quibusdam laborum!</p>
                    </div>
                    <div className="item-course__btns">
                        <Link className="item-course__bnt _btn _blue" to={"/admin/courses/edit"}>Редактировать</Link>
                        <button className="item-course__bnt _btn _red">Удалить</button>
                    </div>
                    <Link className="item-course__link" to={"/admin/courses/show/5"}>Подробнее</Link>
                </div>
                <div className="courses__item item-course">
                    <div>
                        <div className="item-course__img">
                            <img src={foto} alt="" />
                        </div>
                        <h5 className="item-course__name">Социальная психология</h5>
                        <p className="item-course__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis eligendi temporibus minus quibusdam laborum!</p>
                    </div>
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