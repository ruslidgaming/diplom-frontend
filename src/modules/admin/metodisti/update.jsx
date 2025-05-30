import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DivInput from "../../../core/UIKit/input";
import { useAuth } from "../../../core/hoc/AuthProvider";
import Icon from "../../../core/UIKit/icons";
import { Select } from "../../../core/UIKit/select";
import { getAllCourseAdmin, getMetodistEdit } from "./service/metodist-service";
import modal from "./models/modal";
import { useParams } from "react-router-dom";
import loadableModel from "../../../core/UIKit/loadable/Loadable";
import Example from "./components/LottieAnimation";
import { toast } from "react-toastify";

function MetodistEdit() {
    const [showPassword, setShowPassword] = useState(false);
    const [courseImagePreview, setCourseImagePreview] = useState(null);
    const { editData, setEditData, metodistCourseList, setMetodistCourseList,
        deleteCourseMetodist, addCoursesMetodist, catalogList, setCatalogList } = modal;
    const { id } = useParams();
    const { isLoading, setLoadable } = loadableModel


    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues
    } = useForm({
        mode: "onChange",
    });

    const funcAddCoursesMetodist = (idCourse) => {
        addCoursesMetodist(idCourse, id)
    }

    const funcDeleteCourseMetodist = (idCourse) => {
        deleteCourseMetodist(idCourse, id)
    }


    useEffect(() => {
        console.log(id)
        getMetodistEdit(id)
            .then(res => {
                console.log(res.data.metodist.image)
                setEditData(res.data.metodist);
                setMetodistCourseList(res.data.courses);
                setValue("name", res.data.metodist.name);
                setValue("login", res.data.metodist.login);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoadable(false);
            })

        getAllCourseAdmin()
            .then(res => {
                setCatalogList(res.data.courses)
            })
            .catch(err => console.log(err))

    }, [])


    // Валидационные схемы
    const validationRules = {
        name: { required: "Объязательное поле" },
        login: {
            required: "Объязательное поле",
            maxLength: { value: 150, message: "Максимум 150 символов" },
        },
    };

    const onSubmit = async (data) => {
        console.log('asdasd')
        const formData = new FormData();

        formData.append("id", id);
        formData.append("name", getValues('name'));
        formData.append("login", getValues('login'));
        formData.append("password", getValues('password'));
        formData.append("image", getValues("image")[0]);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/mentor/update', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            });

            const result = await response.json();
            if (response.ok) {
                toast.success("Данный методиста обновлены");
            } else {
                toast.error(result.message);
            }

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };



    return (
        isLoading ?
            <Example />
            :
            <div className="addcours">
                <div>
                    <div className="addcours__title">Оформление карточки</div>

                    <div className="addcours-card__face _fonBack-navy__blue">
                        <div>
                            <div className="addcours-card__img">
                                <input
                                    type="file"
                                    id="cours__foto"
                                    style={{ display: "none" }}
                                    accept="image/*"
                                    {...register("image", {
                                        required: "Изображение обязательно",
                                        onChange: (e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = () => setCourseImagePreview(reader.result);
                                                reader.readAsDataURL(file);
                                            }
                                        }
                                    })}
                                />
                                <label htmlFor="cours__foto">
                                    {courseImagePreview ? (
                                        <img
                                            className="addcours-card__face-img"
                                            src={courseImagePreview}
                                            alt="Preview"
                                            style={{ width: 350, height: 350, objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <img className="addcours-card__face-img" src={`http://127.0.0.1:8000/storage/${editData.image}`}
                                            style={{ width: 350, height: 350, objectFit: 'cover' }}
                                        />
                                    )}
                                </label>
                                {errors.courseImage && (
                                    <p style={{ color: "red" }}>{errors.courseImage.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="addcours-card__face-inps">
                            <DivInput className="regLog__textarea" label={<p>Фамилия имя</p>}>
                                <input
                                    className="addcours-card__face-inp"
                                    placeholder="Фамилия имя"
                                    {...register("name", validationRules.name)}
                                />
                            </DivInput>
                            {errors.name && (
                                <p style={{ color: "red" }}>{errors.name.message}</p>
                            )}
                            <DivInput className="regLog__textarea" label={<p>Логин</p>}>
                                <input
                                    type="text"
                                    className="addcours-card__face-inp"
                                    placeholder="Логин"
                                    {...register("login", validationRules.login)}
                                />
                            </DivInput>
                            {errors.login && (
                                <p style={{ color: "red" }}>{errors.login.message}</p>
                            )}
                            <DivInput className="regLog__textarea" label={<p>Пароль <span style={{ color: "red" }}>*</span></p>}>
                                <input type={showPassword ? "text" : "password"} placeholder="Название училища"
                                    {...register('password', {
                                        maxLength: {
                                            value: 20,
                                            message: "Максимум 20 символов",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Минимум 6 символов",
                                        }
                                    })} />

                                <div className="input-password__icon" onClick={() => setShowPassword(!showPassword)}>
                                    <Icon name={showPassword ? "eye-slash" : "eye"} />
                                </div>
                            </DivInput>
                        </div>
                    </div>

                    <div className="addcours__title">Прикрепить курс</div>

                    <div className="medotisCourse__list">


                        <Select handleChange={funcAddCoursesMetodist} items={catalogList} />


                        {metodistCourseList && metodistCourseList.map((item, key) => (
                            <div className="medotisCourse__item" key={key}>
                                <div className="medotisCourse__name">{item.name}</div>
                                <div className="medotisCourse__button" onClick={() => funcDeleteCourseMetodist(item.id)}>
                                    <svg width="78" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M50.2184 18.4269L30.6217 38.0236C29.9521 38.6932 28.8416 38.6932 28.1721 38.0236C27.5025 37.3541 27.5025 36.2436 28.1721 35.574L47.7688 15.9773C48.4384 15.3077 49.5489 15.3077 50.2184 15.9773C50.888 16.6468 50.888 17.7573 50.2184 18.4269Z" fill="#F92626" />
                                        <path d="M50.2184 38.0227C49.5489 38.6923 48.4384 38.6923 47.7688 38.0227L28.1721 18.426C27.5025 17.7564 27.5025 16.6459 28.1721 15.9764C28.8416 15.3068 29.9521 15.3068 30.6217 15.9764L50.2184 35.5731C50.888 36.2427 50.888 37.3532 50.2184 38.0227Z" fill="#F92626" />
                                    </svg>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button type="submit" className="addcours__submit" onClick={onSubmit}>
                        Обновить данные
                    </button>
                </div>
            </div>
    );
}

export default observer(MetodistEdit);