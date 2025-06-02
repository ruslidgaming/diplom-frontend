import { observer } from "mobx-react-lite";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DivInput from "../../core/UIKit/input";
import foto from "../../assets/img/banner.png";
// import courseModal from "./models/course-modal";
// import { courseCreate } from "./service/course-service";
import { useAuth } from "../../core/hoc/AuthProvider";
import Editor from "../../core/UIKit/Editor/Editor";
import { useParams } from "react-router-dom";


function Create() {

    // const { setCourseData } = courseModal;
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [model, setModel] = useState('');
    const [titleValid, setTitleValid] = useState(false);
    const [modelValid, setModelValid] = useState(false);

    const [isValid, setIsValid] = useState(false);

    const [show, setShow] = useState(true);
    const { idCourse } = useParams();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        getValues
    } = useForm({
        defaultValues: {
            title: "",
        },
        mode: "onChange",
    });

    useEffect(() => {
        if (model === '') {
            setModelValid(true);
        } else {
            setModelValid(false);
        }
    }, [model]);
    useEffect(() => {
        if (title === '') {
            setTitleValid(true);
        } else {
            setTitleValid(false);
        }
    }, [title]);

    const onSubmit = async () => {
        const formData = new FormData();

        formData.append("name", title);
        formData.append("content", model);
        formData.append("course_id", idCourse);

        if (model === '') {
            setIsValid(true);
        } else {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/lessons/create', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                });

                const result = await response.json();
                console.log('Server response:', result);
                window.location.href = `/lessons/${idCourse}`;

            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };


    return (
        <div className="addcours">
            <div>
                <div className="learing__header">
                    <div className="addcours__title">Создать урок</div>
                    <button className="learing__view _btn _blue" onClick={() => setShow(!show)}>{show ? "Посмотреть" : "Редактировать"}</button>
                </div>

                {
                    show
                        ?
                        <div>
                            <DivInput className="learing__inp">
                                <input
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    className="addcours-card__face-inp"
                                    placeholder="Название"
                                />
                            </DivInput>

                            {isValid && titleValid && (<p style={{ color: "red", fontSize: "14px", textAlign: "center", margin: "0 0 20px 0" }}>Название объязательно</p>)}

                        </div>
                        :
                        <h2 className="learing__title">{getValues("title")}</h2>
                }



                <Editor model={model} setModel={setModel} show={show} />

                {isValid && modelValid && (<p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>Заполните поле описания</p>)}

                <button type="submit" className="addcours__submit" onClick={handleSubmit(onSubmit)}>
                    Создать урок
                </button>
                <a href={`/lessons/${idCourse}`} className="addcours__submit _btn _blue">
                    Назад
                </a>
            </div>
        </div>
    );
}

export default observer(Create);