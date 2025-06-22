import React from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import ruLocale from '../Designer/locale';
import axios from 'axios';
import DivInput from '../../core/UIKit/input';
import SecretField from './components/copyPass';

const About = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (

        <div>
            <div className="adminAbout__section">
                <div className="adminAbout__title">О себе</div>
                <div className="adminAbout__items">
                    <DivInput className="adminAbout__text" label={<p>Фамилия</p>}>{user.surname}</DivInput>
                    <DivInput className="adminAbout__text" label={<p>Имя</p>}>{user.name}</DivInput>
                    {
                        user.oldname &&
                        <DivInput className="adminAbout__text" label={<p>Отчество</p>}>{user?.oldname}</DivInput>
                    }
                </div>
                <div className="adminAbout__items _margin-top">
                    <DivInput className="adminAbout__text" label={<p>Почта</p>}>{user.email}</DivInput>
                    <DivInput className="adminAbout__text" label={<p>Почта</p>}>{user.telephon}</DivInput>
                </div>
            </div>

            <div className="adminAbout__section">
                <div className="adminAbout__title">Об училище</div>
                <div className="adminAbout__items">
                    <div className="adminAbout__company-name">
                        <DivInput className="adminAbout__text" label={<p>Название</p>}>{user.companyName}</DivInput>
                    </div>
                </div>
                <div className="adminAbout__items">
                    <div className="adminAbout__company-description">
                        <DivInput className="adminAbout__text" label={<p>Описание</p>}>
                            <textarea name="" id="">{user.companyDescription}</textarea>
                        </DivInput>
                    </div>
                </div>
            </div>

            <div className="adminAbout__section">
                <div className="adminAbout__title">Ключи</div>
                <div className="adminAbout__keys">
                    <div className="adminAbout__key">
                        <div className="adminAbout__key-left">Ссылка на кабинет платформы для ученика:</div>
                        <div className="adminAbout__key-rigth">
                            <SecretField value={`http://localhost:5173/student/${user.id}/login`} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="adminAbout__section">
                <div className="adminAbout__title">Тарифы</div>

                <div className="adminAbout__rate">
                    <div className="rate__items">
                        <div className="rate__item item-rate">
                            <div className="item-rate__name">Курс</div>
                            <div className="item-rate__list">
                                <div className="item-rate__list-item">
                                    <p>Кол-во курсов</p>
                                    <p>1 курс</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Нанимать ментора</p>
                                    <p>нельзя</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Кол-во уроков</p>
                                    <p>15 уроков</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Статистика</p>
                                    <p>есть</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <div className="item-rate__price">Стоимость</div>
                                    <div className="item-rate__price">15 000₽</div>
                                </div>
                            </div>
                            <a href={`/pay/tariff/${1}`} className="item-rate__btn _btn _blue">Купить</a>
                        </div>
                        <div className="rate__item item-rate">
                            <div className="item-rate__name">Школа</div>
                            <div className="item-rate__list">
                                <div className="item-rate__list-item">
                                    <p>Кол-во курсов</p>
                                    <p>5 курсов</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Нанимать ментора</p>
                                    <p>3 ментора</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Кол-во уроков</p>
                                    <p>100 уроков</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Статистика</p>
                                    <p>есть</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <div className="item-rate__price">Стоимость</div>
                                    <div className="item-rate__price">40 000₽</div>
                                </div>
                            </div>

                            <a href={`/pay/tariff/${2}`} className="item-rate__btn _btn _blue">Купить</a>
                        </div>
                        <div className="rate__item item-rate">
                            <div className="item-rate__name">Академия</div>
                            <div className="item-rate__list">
                                <div className="item-rate__list-item">
                                    <p>Кол-во курсов</p>
                                    <p>15 курсов</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Нанимать ментора</p>
                                    <p>10 менторов</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Кол-во уроков</p>
                                    <p>500 уроков</p>
                                </div>
                                <div className="item-rate__list-item">
                                    <p>Статистика</p>
                                    <p>есть</p>
                                </div>

                                <div className="item-rate__list-item">
                                    <div className="item-rate__price">Стоимость</div>
                                    <div className="item-rate__price">120 000₽</div>
                                </div>
                            </div>
                            <a href={`/pay/tariff/${3}`} className="item-rate__btn _btn _blue">Купить</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;