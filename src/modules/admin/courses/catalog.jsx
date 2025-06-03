import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import { useEffect, useState } from "react";

import foto from "../../../assets/img/banner.png";
import courseModal from "./models/course-modal";
import { useAuth } from "../../../core/hoc/AuthProvider";
import { courseCatalog, courseCatalogMentor } from "./service/course-service";
import Example from "./components/LottieAnimation";
import loadableModel from "../../../core/UIKit/loadable/Loadable";
import DeleteModal from "../../../core/UIKit/DeleteModal";

function Courses() {

    const { getCourseAllData, courseCatalogList, setCourseCatalogList, setCourseDelete, deleteCourseId, search,
        isSearch,
        searchedModel,
        setSearch } = courseModal
    const { isLoading, setLoadable } = loadableModel

    const { user } = useAuth()

    useEffect(() => {
        if (user.role == "admin") {
            courseCatalog()
                .then(res => {
                    setCourseCatalogList(res.data.courses);
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setLoadable(false)
                })
        }
        if (user.role == "mentor") {
            courseCatalogMentor()
                .then(res => {
                    setCourseCatalogList(res.data.courses);
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setLoadable(false)
                })
        }
    }, [])

    const [staticSections, setStaticSections] = useState("");

    const CheckSetStaticSections = (name) => {
        setStaticSections(staticSections === name ? "" : name)
    }


    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };


    return isLoading ?
        <Example /> :
        <>
            <div className="courses">
                <div className="courses__header">
                    <DivInput className={`search`} >
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Название училища" />

                        <div className="search__icon">
                            <Icon name={"search"} />
                        </div>
                    </DivInput>

                    {user.role == "admin" ? (
                        <a className="courses__add" href={"/admin/courses/form"}>
                            <Icon className="courses__add__icon" name={"plus"} />
                            <span>Добавить</span>
                        </a>
                    )
                        : <div></div>
                    }

                </div>

                <div className="courses__items">
                    {isSearch ?
                        searchedModel.map((item, index) => {
                            <div className="courses__item item-course" key={index}>
                                <div>
                                    <div className="item-course__img">
                                        <img src={`http://127.0.0.1:8000/storage/${item.image}`} alt="" />
                                    </div>
                                    <h5 className="item-course__name">{item.name}</h5>
                                    <p className="item-course__text">{item.mini_description}</p>
                                </div>
                                {user.role == "admin" &&
                                    <div className="item-course__btns">
                                        <a className="item-course__bnt _btn _blue" href={"/admin/courses/edit/" + item.id}>Редактировать</a>
                                        <DeleteModal classNameBtn={"item-course__bnt _btn _red"}
                                            idInfo={item.id}
                                            btnOnClick={deleteCourseId}
                                            onConfirm={setCourseDelete}
                                            onCancel={() => console.log('Удаление отменено')}
                                            itemName="курс 'Введение в React'"
                                        />
                                    </div>
                                }
                                <a className="item-course__link _btn" href={"/courses/show/" + item.id}>Подробнее</a>
                                <a className="item-course__link _btn" href={"/lessons/" + item.id}>Уроки</a>
                            </div>
                        })
                        :
                        courseCatalogList.length > 0 &&
                        courseCatalogList.map((item, index) => (
                            <div className="courses__item item-course" key={index}>
                                <div>
                                    <div className="item-course__img">
                                        <img src={`http://127.0.0.1:8000/storage/${item.image}`} alt="" />
                                    </div>
                                    <h5 className="item-course__name">{item.name}</h5>
                                    <p className="item-course__text">{item.mini_description}</p>
                                </div>
                                {user.role == "admin" &&
                                    <div className="item-course__btns">
                                        <a className="item-course__bnt _btn _blue" href={"/admin/courses/edit/" + item.id}>Редактировать</a>
                                        <DeleteModal classNameBtn={"item-course__bnt _btn _red"}
                                            idInfo={item.id}
                                            btnOnClick={deleteCourseId}
                                            onConfirm={setCourseDelete}
                                            onCancel={() => console.log('Удаление отменено')}
                                            itemName="курс 'Введение в React'"
                                        />
                                    </div>
                                }
                                <a className="item-course__link _btn" href={"/courses/show/" + item.id}>Подробнее</a>
                                <a className="item-course__link _btn" href={"/lessons/" + item.id}>Уроки</a>
                            </div>
                        ))}
                </div>
            </div>
        </>
}
export default observer(Courses);