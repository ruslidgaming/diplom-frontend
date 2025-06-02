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
    const { apiCatalog, catalogList, deleteId, setDelete } = model;
    const { isLoading, setLoadable } = loadableModel;


    useEffect(() => {
        apiCatalog(idCourse, setLoadable)
    }, [])


    return isLoading ?
        <Example /> :
        <>
            <div className="lessons">
                <div className="lessons__header">
                    <div className="lessons__title">Курс программирования Курс программирования</div>
                    <a className="courses__add" href={`/lessons/${idCourse}/create`}>
                        <Icon className="courses__add__icon" name={"plus"} />
                        <span>Добавить</span>
                    </a>
                </div>

                <div className="lessons__items">
                    {catalogList.length > 0 &&
                        catalogList.map((item, index) => (
                            <div className="lessons__item item-lessons" key={index}>
                                <div className="item-lessons__name"><span className="item-lessons__number">{index + 1}</span>{item.name}</div>

                                <div className="item-lessons__btns">
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
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
}
export default observer(Catalog);