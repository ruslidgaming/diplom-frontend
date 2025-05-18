import banner from '../../../../assets/img/banner.png';
import { AboutIcons } from './components/about-icons';
import logo from "../../../../assets/img/logo.svg";
import sliderContr from "../../../../assets/img/swiper-constr.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

// import 'swiper/swiper-bundle.min.css';
import { useRef } from 'react';

export default function Main() {

    const swiperRef = useRef(null);

    const goNext = () => {
        swiperRef.current?.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.slidePrev();
    };


    return <>
        <section className="banner">
            <div className="banner__container container">
                <div className="banner__text">
                    <h1 className='h1'>Сделай знания доступными с помощью платформы <span> Фенек</span ></h1 >
                    <a href="" className='banner__btn _btn _blue' >Открыть курс</a>
                </div >
                <div className="banner__left">
                    <div className="banner__img">
                        <img src={banner} alt="banner img" />
                        <img src={banner} alt="banner img" />
                    </div>
                </div>
            </div >
        </section >
        <section className="about container section">
            <div className="about__title h2"><span>Фенек</span> - это</div>
            <div className="about__items">
                <div className="about__item item-about">
                    <div className="item-about__icon">
                        <AboutIcons name="constructor" />
                    </div>
                    <p className="item-about__title">Конструктор</p>
                    <p className='item-about__text'>Создай свой лендинг с помощью конструктора</p>
                </div>
                <div className="about__item item-about">
                    <div className="item-about__icon">
                        <AboutIcons name="security-user" />

                    </div>
                    <p className="item-about__title">Панель администратора</p>
                    <p className='item-about__text'>Всё управление в личном кабинете</p>
                </div>
                <div className="about__item item-about">
                    <div className="item-about__icon">
                        <AboutIcons name="teacher" />
                    </div>
                    <p className="item-about__title">Личный кабинет учеников</p>
                    <p className='item-about__text'>Для ваших клиентов есть доступ к материалам</p>
                </div>
                <div className="about__item item-about">
                    <div className="item-about__icon">
                        <AboutIcons name="mentor" />
                    </div>
                    <p className="item-about__title">Менторы</p>
                    <p className='item-about__text'>Нанимайте менторов для поддержки учеников</p>
                </div>
            </div>
        </section>

        <section className="projects container section">
            <div className="projects__title h2">Наша <span>платформа</span> <br />подойдёт</div>

            <div className="projects__items">
                <div className="projects__item item-projects">
                    <div className="item-projects__img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="item-projects__title">Компании</div>
                    <p className="item-projects__text">Удобный личный кабинет для учеников Удобный личный кабинет для учеников Удобный личный кабинет для учениковУдобный личный кабинет для учеников Удобный личный кабинет для учеников Удобный личный кабинет для учеников Удобный личный кабинет для учениковУдобный личный кабинет для учеников</p>
                    <a href="#" className='item-projects__btn _btn _blue-text'>Узнать тариф</a>
                </div>
                <div className="projects__item item-projects">
                    <div className="item-projects__img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="item-projects__title">Компании</div>
                    <p className="item-projects__text">Удобный личный кабинет для учеников Удобный личный кабинет для учеников Удобный личный кабинет для учениковУдобный личный кабинет для учеников Удобный личный кабинет для учеников Удобный личный кабинет для учеников Удобный личный кабинет для учениковУдобный личный кабинет для учеников</p>
                    <a href="#" className='item-projects__btn _btn _blue-text'>Узнать тариф</a>
                </div>

                <div className="projects__item item-projects">
                    <div className="item-projects__img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="item-projects__title">Компании</div>
                    <p className="item-projects__text">
                        Прокачали свою экспертизу и готовы заработать на своих знаниях? Запускайте свою школу у нас!
                    </p>
                    <a href="#" className='item-projects__btn  _btn _blue-text'>Узнать тариф</a>
                </div>
                <div className="projects__item item-projects">
                    <div className="item-projects__img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="item-projects__title">Компании</div>
                    <p className="item-projects__text">
                        Прокачали свою экспертизу и готовы заработать на своих знаниях? Запускайте свою школу у нас!
                    </p>
                    <a href="#" className='item-projects__btn  _btn _blue-text'>Узнать тариф</a>
                </div>
            </div>
        </section>

        <section className='black-fon'>
            <div className="container">
                <section className='black-fon__logo'>
                    <div className='black-fon__logo-img'>
                        <img src={logo} alt="" />
                    </div>
                </section>


                <section className='constructor'>
                    <div className="constructor__title">Создай свой лендинг на простом <span>конструкторе</span></div>
                    import SwiperCore from 'swiper';
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1.3}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="constructor__items"
                    >
                        <SwiperSlide className="constructor__item item-constructor">
                            <div className="item-constructor__img">
                                <img src={sliderContr} alt="" />
                            </div>
                            <div className="item-constructor__number">01</div>
                            <p className="item-constructor__title">Выбор шаблона</p>
                        </SwiperSlide>
                    </Swiper>
                </section>

            </div>
        </section>
    </>
}
