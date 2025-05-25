import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import Icon from "../../../core/UIKit/icons";
import { useEffect, useRef, useState } from "react";
import { courseShow } from "./service/course-service";

// ===Swiper===
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CoursesShow() {

    const { idCourse } = useParams();
    useEffect(() => {
        courseShow(idCourse)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const swiperRef = useRef(null)
    const slideClickPrev = () => {
        swiperRef.current.swiper.slidePrev()
    }
    const slideClickNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    return <>
        <section class="banner _course">
            <div class="banner__word  _py">
                <h3>Название</h3>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor dui. Sed ut enim nec nunc sagittis fermentum</h2>
                <a class="banner__btn _btn _blue" href="#rate">Купить</a>
                <a class="banner__errow">
                    <span>V</span>
                    <span>V</span>
                    <span>V</span>
                </a>
            </div>
        </section>

        <section class="banner__about _py " id="about">
            <h3 class="_700"><span>О курсе</span></h3>
            <p class="_text-lvl_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tortor dui. Sed ut enim nec nunc sagittis fermentum. Nulla facilisi.</p>
        </section>


        <section class="banner__technologies  _py">
            <h3 class="technologies__title _700"><span>Технологии</span> изучаемые в процессе обучения</h3>

            <div class="technologies__cards">
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <h6 class="technologies__name _700">Spring Boot</h6>
                    <p class="technologies__text">Технология для быстрого создания и запуска проектов на основе Spring</p>
                </div>
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <h6 class="technologies__name _700">Spring Boot</h6>
                    <p class="technologies__text">Технология для быстрого создания и запуска проектов на основе Spring</p>
                </div>
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <h6 class="technologies__name _700">Spring Boot</h6>
                    <p class="technologies__text">Технология для быстрого создания и запуска проектов на основе Spring</p>
                </div>
            </div>
        </section>

        <section class="banner__technologies _content _py">
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

            <div class="lesson__cards">
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <p class="_text-lvl_3">Урок  1</p>
                </div>
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <p class="_text-lvl_3">Урок  1</p>
                </div>
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <p class="_text-lvl_3">Урок  1</p>
                </div>
                <div class="technologies__card _fonBack-navy__blue _hover">
                    <p class="_text-lvl_3">Урок  1</p>
                </div>
            </div>
        </section>

        <section class="teacher _py" id="teacher">
            <div className="teacher__header">
                <h2 class="teacher__title _700"><span>Ваши</span> наставники</h2>
                <div className="constructor__btns">
                    <button className="constructor__btn btn-prev" onClick={slideClickPrev}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="35" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2643 23.903C39.5633 23.2021 38.4604 23.1482 37.6976 23.7413L37.5144 23.903L27.7922 33.6252C27.0912 34.3262 27.0373 35.4291 27.6304 36.1919L27.7922 36.3751L37.5144 46.0973C38.2737 46.8567 39.5049 46.8567 40.2643 46.0973C40.9652 45.3964 41.0191 44.2934 40.426 43.5306L40.2643 43.3475L31.9185 35.0002L40.2643 26.6529C40.9652 25.9519 41.0191 24.849 40.426 24.0862L40.2643 23.903Z" fill="#17181C" />
                        </svg>
                    </button>
                    <button className="constructor__btn btn-prev" onClick={slideClickNext}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="70" rx="35" transform="matrix(-1 0 0 1 70 0)" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7357 23.903C30.4367 23.2021 31.5396 23.1482 32.3024 23.7413L32.4856 23.903L42.2078 33.6252C42.9088 34.3262 42.9627 35.4291 42.3696 36.1919L42.2078 36.3751L32.4856 46.0973C31.7263 46.8567 30.4951 46.8567 29.7357 46.0973C29.0348 45.3964 28.9809 44.2934 29.574 43.5306L29.7357 43.3475L38.0815 35.0002L29.7357 26.6529C29.0348 25.9519 28.9809 24.849 29.574 24.0862L29.7357 23.903Z" fill="#17181C" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="container _course">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={30}
                    slidesPerView={4}
                    loop={false}
                    className="teacher__cards"
                >
                    <SwiperSlide className="teacher__card teacher-card _fonBack-navy__blue">
                        <div class="teacher-card__img">
                            <img src="<?= htmlentities($publicPath) ?>/media/users/<?= htmlentities($profUser['img']) ?>"
                                alt="teacher" />
                        </div>
                        <h4 class="teacher-card__name">ИМЯ ПОЛНОЕ</h4>
                        <p class="teacher-card__text">Должность</p>
                    </SwiperSlide>
                    <SwiperSlide className="teacher__card teacher-card _fonBack-navy__blue">
                        <div class="teacher-card__img">
                            <img src="<?= htmlentities($publicPath) ?>/media/users/<?= htmlentities($profUser['img']) ?>"
                                alt="teacher" />
                        </div>
                        <h4 class="teacher-card__name">ИМЯ ПОЛНОЕ</h4>
                        <p class="teacher-card__text">Должность</p>
                    </SwiperSlide>
                    <SwiperSlide className="teacher__card teacher-card _fonBack-navy__blue">
                        <div class="teacher-card__img">
                            <img src="<?= htmlentities($publicPath) ?>/media/users/<?= htmlentities($profUser['img']) ?>"
                                alt="teacher" />
                        </div>
                        <h4 class="teacher-card__name">ИМЯ ПОЛНОЕ</h4>
                        <p class="teacher-card__text">Должность</p>
                    </SwiperSlide>
                    <SwiperSlide className="teacher__card teacher-card _fonBack-navy__blue">
                        <div class="teacher-card__img">
                            <img src="<?= htmlentities($publicPath) ?>/media/users/<?= htmlentities($profUser['img']) ?>"
                                alt="teacher" />
                        </div>
                        <h4 class="teacher-card__name">ИМЯ ПОЛНОЕ</h4>
                        <p class="teacher-card__text">Должность</p>
                    </SwiperSlide>
                    <SwiperSlide className="teacher__card teacher-card _fonBack-navy__blue">
                        <div class="teacher-card__img">
                            <img src="<?= htmlentities($publicPath) ?>/media/users/<?= htmlentities($profUser['img']) ?>"
                                alt="teacher" />
                        </div>
                        <h4 class="teacher-card__name">ИМЯ ПОЛНОЕ</h4>
                        <p class="teacher-card__text">Должность</p>
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>

        <div class="userInfo__btns _infoUser">
            <a class="userInfo__btn _btn _notBack" href="courses">Назад</a>
        </div>
    </>
}
export default observer(CoursesShow);