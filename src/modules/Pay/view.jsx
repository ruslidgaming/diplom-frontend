import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import listModel from "./models/model";
import loadableModel from "../../core/UIKit/loadable/Loadable";
import Example from "../admin/metodisti/components/LottieAnimation";

function Pay() {

    // Состояния для полей формы
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    // Форматирование номера карты
    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\D/g, '');
        const limited = cleaned.substring(0, 16);
        const formatted = limited.replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(formatted);
    };

    // Форматирование имени владельца
    const formatCardName = (value) => {
        const cleaned = value.replace(/[^a-zA-Z\s]/g, '');
        const formatted = cleaned.toUpperCase();
        setCardName(formatted);
    };

    // Форматирование даты
    const formatExpiryDate = (value) => {
        const cleaned = value.replace(/\D/g, '');
        let formatted = cleaned;

        if (cleaned.length > 2) {
            formatted = `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
        }

        setExpiryDate(formatted.substring(0, 5));
    };

    // Форматирование CVC
    const formatCvc = (value) => {
        const cleaned = value.replace(/\D/g, '');
        setCvc(cleaned.substring(0, 3));
    };



    const { apiData, list, apiDataTariff } = listModel
    const { type, id } = useParams();
    const { isLoading, setLoadable } = loadableModel
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();


    useEffect(() => {
        if (type == "course") {
            apiData(idCourse, setLoadable)
        } else if (type == "tariff") {
            apiDataTariff(idCourse, user.id, setLoadable)
        }
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
                    <div className="buy__pay buy__card">
                        <div className="buy__inpBlock">
                            <p className="_text-lvl_3">Номер карты</p>
                            <input
                                className="buy__input _text-lvl_3 _input"
                                type="text"
                                name="number"
                                placeholder="1234 1234 1234 1234"
                                value={cardNumber}
                                onChange={(e) => formatCardNumber(e.target.value)}
                            />
                        </div>

                        <div className="buy__inpBlock">
                            <p className="_text-lvl_3">ФИ владельца</p>
                            <input
                                className="buy__input _text-lvl_3"
                                type="text"
                                name="name"
                                placeholder="ИМЯ ФАМИЛИЯ"
                                value={cardName}
                                onChange={(e) => formatCardName(e.target.value)}
                            />
                        </div>

                        <div className="buy__inpBlocks">
                            <div className="buy__inpBlock">
                                <p className="_text-lvl_3">Дата</p>
                                <input
                                    className="buy__input _text-lvl_3"
                                    type="text"
                                    name="date"
                                    placeholder="__/__"
                                    value={expiryDate}
                                    onChange={(e) => formatExpiryDate(e.target.value)}
                                />
                            </div>

                            <div className="buy__inpBlock">
                                <p className="_text-lvl_3">CVC</p>
                                <input
                                    className="buy__input _text-lvl_3"
                                    type="password"
                                    name="cvc"
                                    placeholder="***"
                                    value={cvc}
                                    onChange={(e) => formatCvc(e.target.value)}
                                />
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