import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import listModel from "./models/model";
import loadableModel from "../../core/UIKit/loadable/Loadable";
import Example from "../admin/metodisti/components/LottieAnimation";

function Pay() {

    const { apiData, list } = listModel
    const { idCourse } = useParams();
    const { isLoading, setLoadable } = loadableModel
    const navigate = useNavigate();


    useEffect(() => {
        apiData(idCourse, setLoadable)
    }, [])

    return isLoading ?
        <Example /> :
        <>
            <div className="list-feedback list-column">
                <div class="buy__cards">
                    <div class="buy__info buy__card _fonBack-navy__blue">
                        <div class="buy__info-top">
                            <div className="buy__img">
                                <img src={"http://127.0.0.1:8000/storage/" + list.image} alt="course" />
                            </div>
                        </div>
                        <div class="buy__info-word">
                            <div class="buy__info-text">
                                <p class="_text-lvl_2">Курс</p>
                                <p class="_text-lvl_2">{list.name}</p>
                            </div>
                            <div class="buy__info-text _down">
                                <p class="_text-lvl_1">Стоимость курса</p>
                                <p class="_text-lvl_1">{list.price} ₽</p>
                            </div>
                        </div>
                    </div>
                    <div class="buy__pay buy__card">
                        <div class="buy__inpBlock">
                            <p class="_text-lvl_3">Номер карты</p>
                            <input class="buy__input _text-lvl_3 _input" type="text" name="number" placeholder="1234 1234 1234 1234"
                                id="creditCardInput" value="" />
                        </div>

                        <div class="buy__inpBlock">
                            <p class="_text-lvl_3">ФИ владельца</p>
                            <input class="buy__input _text-lvl_3" type="text" name="name" placeholder="ИМЯ ФАМИЛИЯ" id="userNameInput"
                                value="" />
                        </div>

                        <div class="buy__inpBlocks">
                            <div class="buy__inpBlock">
                                <p class="_text-lvl_3">Дата</p>
                                <input class="buy__input _text-lvl_3" type="text" name="date" id="expirationDateInput" placeholder="__/__"
                                    value="" />
                            </div>

                            <div class="buy__inpBlock">
                                <p class="_text-lvl_3">CVC</p>
                                <input class="buy__input _text-lvl_3" type="number" name="cvc" placeholder="***" id="numberInput"
                                    value="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="buy__btns">
                    <button class="buy__btn _btn _notBack _blue" name="pay">Купить</button>
                    <a class="buy__btn _btn _redBack " onClick={() => navigate(-1)}>Назад</a>
                </div>
            </div>
        </>
}
export default observer(Pay);