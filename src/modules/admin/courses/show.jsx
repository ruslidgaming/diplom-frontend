import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import Icon from "../../../core/UIKit/icons";
import { useEffect, useState } from "react";
import { courseShow } from "./service/course-service";


function CoursesShow() {

    const { idCourse } = useParams();
    useEffect(() => {
        courseShow(idCourse)
            .then(res => {
                console.log(res.idCourse);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return <>
        <section class="banner">
            <div class="banner__word  _py">
                <p class="_text-lvl_1">Название</p>
                <h2>Слоган</h2>
                <a class="banner__btn _btn" href="#rate">Начать обучение</a>
            </div>
        </section>

        <section class="about _py " id="about">
            <div class="info-block _fonBack-navy__blue _cours">
                <div class="info-block__word _cours">
                    <h3 class="_700"><span>О курсе</span></h3>
                    <p class="_text-lvl_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor dui. Sed ut enim nec nunc sagittis fermentum. Nulla facilisi.</p>
                </div>
            </div>
        </section>


        <section class="technologies  _py">
            <h3 class="technologies__title _700"><span>Технологии</span> изучаемые в процессе обучения</h3>

            <div class="technologies__cards">
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <h6 class="technologies__name _700">Spring Boot</h6>
                    <p class="_text-lvl_3">Технология для быстрого создания и запуска проектов на основе Spring</p>
                </div>
            </div>
        </section>

        <section class="technologies _content _py">
            <h2 class="technologies__title _700">Вас ждут <span>8</span>
                {/* <?php if (count($listTheory) == 1) {
                echo "урок";
            } else if (count($listTheory) > 1 && count($listTheory) < 5) {
                echo "урока";
            } else {
                echo "уроков";
            }
            ?> */}
            </h2>

            <div class="technologies__cards">
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <p class="_text-lvl_3">Урок  1</p>
                </div>
            </div>
        </section>

        <section class="rate" id="rate">
            <h3 class="rate__title _700">Выберите <span>удобный</span> для вас тариф оплаты</h3>
            <div class="rate__cards">
                <div class="rate__card _fonBack-navy__blue">
                    <img src="<?= htmlentities($publicPath) ?>/media/page-cours/pay-now.png" alt="pay-now" />
                    <h3 class="_700">Оплатить сразу</h3>
                    <p class="_text-lvl_2">
                        Учеба начнется сразу после покупки
                        Любые методы оплаты
                        Проверка знаний после каждого модуля
                        Онлайн-встречи с менторами
                    </p>
                    <h3 class="_700">15500 ₽</h3>
                    <form action="buy" method="post">
                        <input type="hidden" name="idCours" value="" />
                        <input type="hidden" name="rate" value="norm" />
                        <button class="rate__btn _btn _unbounded _border" name="buy">Выбрать</button>
                    </form>
                </div>
                <div class="rate__card _fonBack-navy__blue _green">
                    <img src="<?= htmlentities($publicPath) ?>/media/page-cours/pay-manth.png" alt="pay-now" />
                    <h3 class="_700">Оплата в рассрочку</h3>
                    <p class="_text-lvl_2">
                        Всё из тарифа “оплатить сразу”
                        Оплата в рассрочку без дополнительных комиссий.
                    </p>
                    <h3 class="_700">от 15000 so'm х6</h3>
                    в месяц
                    <form action="buy" method="post">
                        <input type="hidden" name="idCours" value="" />
                        <input type="hidden" name="rate" value="instalplan" />
                        <button class="rate__btn _btn _unbounded _border" name="buy">Выбрать</button>
                    </form>
                </div>
            </div>
        </section>

        <div class="userInfo__btns _infoUser">
            <a class="userInfo__btn _btn _notBack" href="courses">Назад</a>
        </div>
    </>
}
export default observer(CoursesShow);