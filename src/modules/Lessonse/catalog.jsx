import { observer } from "mobx-react-lite";
import Icon from "../../core/UIKit/icons";
import { useEffect, useState } from "react";

import { useAuth } from "../../core/hoc/AuthProvider";

import loadableModel from "../../core/UIKit/loadable/Loadable";
import DeleteModal from "../../core/UIKit/DeleteModal";
import Example from "../admin/metodisti/components/LottieAnimation";
import model from "./model/model";
import { useParams } from "react-router-dom";

function Catalog() {
    const { user } = useAuth();
    const { idCourse } = useParams();
    const { apiLessons, apiCatalog, catalogList, serteficate, deleteId, setDelete, title, goood } = model;
    const { isLoading, setLoadable } = loadableModel;

    useEffect(() => {
        if (user.role == "student") {
            apiLessons({ idCourse: idCourse, userId: user.id }, setLoadable)
        } else {
            apiCatalog(idCourse, setLoadable)
        }
    }, [])




    return isLoading ?
        <Example /> :
        <>
            <div className="lessons">
                <div className="lessons__header">
                    <div className="lessons__title">{title}</div>

                    {
                        user.role == "student" ?
                            <div className="lessons__progress">
                                Пройдено <span>
                                    {goood} из {catalogList.length}
                                </span>
                            </div>
                            :
                            <a className="courses__add" href={`/lessons/${idCourse}/create`}>
                                <Icon className="courses__add__icon" name={"plus"} />
                                <span>Добавить</span>
                            </a>
                    }
                </div>


                <div className="lessons__items">
                    {catalogList.length > 0 &&
                        catalogList.map((item, index) =>
                            item.complete == 2 ?
                                <>
                                    <div className="lessons__item item-lessons" key={index}>
                                        <div className="item-lessons__name"><span className="item-lessons__number">{index + 1}</span>{item.name}</div>

                                        <div className="item-lessons__btns">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="#292D32" />
                                                <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="#292D32" />
                                                <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="#292D32" />
                                            </svg>
                                        </div>
                                    </div>
                                </>
                                :
                                (<div className="lessons__item item-lessons" key={index}>
                                    <a href={`${idCourse}/update/${item.id}`} className="item-lessons__name"><span className="item-lessons__number">{index + 1}</span>{item.name}</a>

                                    <div className="item-lessons__btns">

                                        {user.role == "mentor" || user.role == "admin" &&
                                            <>
                                                <a
                                                    className="item-metodist__edit"
                                                    href={`${idCourse}/update/${item.id}`}
                                                >
                                                    <svg
                                                        width="42"
                                                        height="42"
                                                        viewBox="0 0 42 42"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M26.1289 39.6294H15.6772C6.21854 39.6294 2.17725 35.5881 2.17725 26.1293V15.6777C2.17725 6.21903 6.21854 2.17773 15.6772 2.17773H19.1611C19.8753 2.17773 20.4676 2.76999 20.4676 3.48419C20.4676 4.19838 19.8753 4.79064 19.1611 4.79064H15.6772C7.64692 4.79064 4.79015 7.64741 4.79015 15.6777V26.1293C4.79015 34.1597 7.64692 37.0164 15.6772 37.0164H26.1289C34.1592 37.0164 37.016 34.1597 37.016 26.1293V22.6455C37.016 21.9313 37.6082 21.339 38.3224 21.339C39.0366 21.339 39.6289 21.9313 39.6289 22.6455V26.1293C39.6289 35.5881 35.5876 39.6294 26.1289 39.6294Z"
                                                            fill="#1E5EFF"
                                                        />
                                                        <path
                                                            d="M14.8063 30.8146C13.7437 30.8146 12.7683 30.4313 12.0541 29.7346C11.2005 28.881 10.8347 27.6442 11.0263 26.3378L11.7754 21.0946C11.9147 20.0842 12.5766 18.7778 13.2908 18.0636L27.0173 4.33714C30.4837 0.870692 34.0025 0.870692 37.4689 4.33714C39.3676 6.23585 40.2212 8.1694 40.047 10.103C39.8902 11.6707 39.0541 13.2036 37.4689 14.7713L23.7425 28.4978C23.0283 29.212 21.7218 29.8739 20.7115 30.0133L15.4683 30.7623C15.2418 30.8146 15.0154 30.8146 14.8063 30.8146ZM28.8637 6.1836L15.1373 19.91C14.8063 20.241 14.4231 21.0075 14.3534 21.4604L13.6044 26.7036C13.5347 27.2088 13.6392 27.6268 13.9005 27.8881C14.1618 28.1494 14.5799 28.2539 15.085 28.1842L20.3283 27.4352C20.7812 27.3655 21.565 26.9823 21.8786 26.6513L35.605 12.9249C36.7373 11.7926 37.3295 10.7823 37.4166 9.84166C37.5212 8.7094 36.9289 7.50747 35.605 6.16618C32.8179 3.37908 30.9018 4.16295 28.8637 6.1836Z"
                                                            fill="#1E5EFF"
                                                        />
                                                        <path
                                                            d="M34.5776 17.1236C34.4557 17.1236 34.3337 17.1062 34.2292 17.0714C29.6479 15.7823 26.0073 12.1417 24.7182 7.56041C24.5266 6.86363 24.9273 6.14944 25.624 5.94041C26.3208 5.7488 27.035 6.14944 27.2266 6.84622C28.2718 10.5565 31.2157 13.5004 34.926 14.5456C35.6228 14.7372 36.0234 15.4688 35.8318 16.1656C35.675 16.7578 35.1524 17.1236 34.5776 17.1236Z"
                                                            fill="#1E5EFF"
                                                        />
                                                    </svg>
                                                </a>


                                                <DeleteModal
                                                    classNameBtn={"item-lessons__delete"}
                                                    icon
                                                    idInfo={item.id}
                                                    btnOnClick={deleteId}
                                                    onConfirm={() => setDelete(idCourse)}
                                                    onCancel={() => console.log("Удаление отменено")}
                                                />
                                            </>
                                        }

                                        {user.role == "student" && item.complete != 0 &&
                                            <>
                                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="31" height="31" rx="15.5" fill="#00B533" />
                                                    <path d="M12.1925 22.3033C11.5762 22.3033 10.9598 22.0741 10.4733 21.583L7.22941 18.309C6.28869 17.3595 5.9709 16.6653 6.91162 15.7158C7.85234 14.7663 8.83875 15.4278 9.77947 16.3773L12.1925 19.2033L21.6363 9.90324C22.577 8.95377 23.2144 8.17954 24.1551 9.12902C25.0958 10.0785 24.584 10.8114 23.6433 11.7609L13.9118 21.583C13.4252 22.0741 12.8088 22.3033 12.1925 22.3033Z" fill="white" />
                                                </svg>
                                            </>
                                        }

                                    </div>
                                </div>)
                        )
                    }

                    {
                        user.role == "student" && (serteficate ?
                            <div className={`lessons__item item-lessons __finished`}>

                                <a href={`${idCourse}/update/finish`} className="item-lessons__name">Получить сертификат</a>

                                <div className="item-lessons__btns">
                                </div>
                            </div>
                            :
                            <div className={`lessons__item item-lessons __finished _not`}>

                                <div className="item-lessons__name">Получить сертификат</div>


                                <div className="item-lessons__btns">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8V10C18.75 10.41 18.41 10.75 18 10.75Z" fill="#292D32" />
                                        <path d="M12 19.25C10.21 19.25 8.75 17.79 8.75 16C8.75 14.21 10.21 12.75 12 12.75C13.79 12.75 15.25 14.21 15.25 16C15.25 17.79 13.79 19.25 12 19.25ZM12 14.25C11.04 14.25 10.25 15.04 10.25 16C10.25 16.96 11.04 17.75 12 17.75C12.96 17.75 13.75 16.96 13.75 16C13.75 15.04 12.96 14.25 12 14.25Z" fill="#292D32" />
                                        <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V15C1.25 10.59 2.59 9.25 7 9.25H17C21.41 9.25 22.75 10.59 22.75 15V17C22.75 21.41 21.41 22.75 17 22.75ZM7 10.75C3.42 10.75 2.75 11.43 2.75 15V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V15C21.25 11.43 20.58 10.75 17 10.75H7Z" fill="#292D32" />
                                    </svg>
                                </div>
                            </div>)

                    }


                </div>
            </div>
        </>
}
export default observer(Catalog);