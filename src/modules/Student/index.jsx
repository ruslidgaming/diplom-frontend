import { observer } from "mobx-react-lite";
import { studModel } from "./model";
import loadableModel from "../../core/UIKit/loadable/Loadable";
import { useParams } from "react-router-dom";
import { useAuth } from "../../core/hoc/AuthProvider";
import { useEffect, useState } from "react";
import Example from "../admin/metodisti/components/LottieAnimation";

function Courses() {

    const { myCatalog, allCatalog, endCatalog, catalog } = studModel
    const { isLoading, setLoadable } = loadableModel

    const { id, type } = useParams()

    const { user } = useAuth()

    useEffect(() => {
        if (type === "all") {
            allCatalog(id, setLoadable)
        }
        if (type === "my") {
            myCatalog(user.id, setLoadable)
        }
        if (type === "end") {
            endCatalog(user.id, setLoadable)
        }
    }, [type])

    return isLoading ?
        <Example /> :
        <>
            <div className="courses">

                <div className="courses__items">
                    {catalog && catalog?.map((item) => (
                        <div className="courses__item item-course" key={item.id}>
                            <div>
                                <div className="item-course__img">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${item.image}`}
                                        alt={item.name}
                                    />
                                </div>
                                <h5 className="item-course__name">{item.name}</h5>
                                <p className="item-course__text">{item.mini_description}</p>
                            </div>

                            {user?.role === "admin" && (
                                <div className="item-course__btns">
                                    <a
                                        className="item-course__bnt _btn _blue"
                                        href={`/admin/courses/edit/${item.id}`}
                                    >
                                        Редактировать
                                    </a>
                                    <DeleteModal
                                        classNameBtn="item-course__bnt _btn _red"
                                        idInfo={item.id}
                                        btnOnClick={deleteCourseId}
                                        onConfirm={setCourseDelete}
                                        onCancel={() => console.log('Удаление отменено')}
                                        itemName={`курс '${item.name}'`}
                                    />
                                </div>
                            )}

                            <div className="item-course__links">
                                <a className="item-course__link _btn" href={`courses/show/${item.id}`}>
                                    Подробнее
                                </a>


                                {
                                    type !== "all" &&
                                    <a a className="item-course__link _btn" href={`/lessons/${item.id}`}>
                                        Уроки
                                    </a>
                                }
                            </div>
                        </div>
                    ))
                    }
                    {/* )} */}
                </div>
            </div >
        </>
}
export default observer(Courses);