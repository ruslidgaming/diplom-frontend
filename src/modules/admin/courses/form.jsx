import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import DivInput from "../../../core/UIKit/input";
import Icon from "../../../core/UIKit/icons";
import ProfileIcon from "../../layout/profileComponents/profileIcons";
import LineChart from "./components/statistic";
import { useState } from "react";

import foto from "../../../assets/img/banner.png";

function CoursesForm() {


    return <>
        <div className="addcours">
            <form method="post" enctype="multipart/form-data">

                <div className="addcours__title">Оформление карточки</div>

                <div className="addcours-card__face _fonBack-navy__blue">
                    <div className="addcours-card__img">
                        <input type="file" id="cours__foto" name="imgCourse" style={{ display: "none" }} />
                        <label for="cours__foto">350<span>x</span>350</label>
                    </div>

                    <div className="addcours-card__face-inps">
                        <DivInput className="addcours__inp" label={<p>Название</p>}>
                            <input className="addcours-card__face-inp" name="cours-name" placeholder="Название" value="" />
                        </DivInput>
                        <DivInput className="addcours__inp" label={<p>Цена</p>}>
                            <input type="number" className="addcours-card__face-inp" name="cours-name" placeholder="Цена" value="" />
                        </DivInput>
                        <DivInput className="addcours__inp" label={<p>Описание для карточки</p>}>
                            <textarea className="addcours-card__face-inp" name="cours-discriptionMini" placeholder="Описание карточки"></textarea>
                        </DivInput>
                    </div>
                </div>

                <div className="addcours__title">Карточки "Что проходим на курсе"</div>
                <div className="addcours-info__items">
                    <div className="addcours-info__item _create">

                        <DivInput className="addcours-info__title">
                            <input className="addcours-info__inp" name="cours-name" placeholder="Название" value="" />
                        </DivInput>

                        <DivInput className="addcours-info__text" label={<p>Описание для карточки</p>}>
                            <textarea className="addcours-info__textarea" name="cours-discriptionMini" placeholder="Описание карточки"></textarea>
                        </DivInput>
                    </div>
                    <div className="addcours-info__item _create">
                        <p className="addcours-info__title">Название</p>
                        <p className="addcours-info__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, perspiciatis. Quia enim illo temporibus eius natus exercitationem delectus, dolorum sint!</p>
                    </div>
                    <div className="addcours-info__item _create">
                        <p className="addcours-info__title">Название</p>
                        <p className="addcours-info__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, perspiciatis. Quia enim illo temporibus eius natus exercitationem delectus, dolorum sint!</p>
                    </div>
                    <div className="addcours-info__item _create">
                        <p className="addcours-info__title">Название</p>
                        <p className="addcours-info__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, perspiciatis. Quia enim illo temporibus eius natus exercitationem delectus, dolorum sint!</p>
                    </div>
                </div>


                <div className="addcours-card _fonBack-navy__blue">
                    <DivInput className="regLog__textarea" label={<p>Слоган <span style={{ color: "red" }}>*</span></p>}>
                        <textarea className="addcours-card__slogan" name="cours-slogan" placeholder="Слоган"></textarea>
                    </DivInput>
                </div>

                <div className="addcours-card _fonBack-navy__blue">
                    <textarea className="addcours-card__discription" name="cours-discription"
                        placeholder="Описание обязанностей специалиста"></textarea>
                </div>

                <div className="addcours-telegram">
                    <h3 className="_700">Ссылка на телеграм <span>канал</span></h3>
                    <input className="addcours-telegram__inp _fonBack-navy__blue" type="text" name="telegLink" placeholder="@telegram" value="" />
                </div>

                <div>
                    <input className="addcours-btn _btn _border" type="submit" name="addCours" value="Добавить" id="btnForm" />
                </div>
            </form>
        </div>
    </>
}
export default observer(CoursesForm);