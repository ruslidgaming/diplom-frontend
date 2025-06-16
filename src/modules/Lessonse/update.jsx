import { observer } from "mobx-react-lite";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DivInput from "../../core/UIKit/input";
import { useAuth } from "../../core/hoc/AuthProvider";
import Editor from "../../core/UIKit/Editor/Editor";
import { useParams } from "react-router-dom";
import model from "./model/model";
import Example from "../admin/metodisti/components/LottieAnimation";
import loadableModel from "../../core/UIKit/loadable/Loadable";
import { toast } from "react-toastify";


function Update() {

    const { user } = useAuth();
    const { apiEditData, editData, setFinishLearn } = model;
    const [title, setTitle] = useState();
    const [modelEditor, setModelEditor] = useState();
    const [titleValid, setTitleValid] = useState(false);
    const [modelEditorValid, setModelEditorValid] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [show, setShow] = useState(user.role != "student");
    const { idCourse, lessonId } = useParams();
    const { isLoading, setLoadable } = loadableModel;

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
        if (modelEditor === '') {
            setModelEditorValid(true);
        } else {
            setModelEditorValid(false);
        }
    }, [modelEditor]);
    useEffect(() => {
        if (title === '') {
            setTitleValid(true);
        } else {
            setTitleValid(false);
        }
    }, [title]);

    useEffect(() => {
        apiEditData(lessonId, setLoadable);
    }, [])

    useEffect(() => {
        setTitle(editData?.name)
        setModelEditor(editData?.content)
    }, [isLoading])

    const onSubmit = async () => {
        const formData = new FormData();

        formData.append("id", lessonId);
        formData.append("name", title);
        formData.append("content", modelEditor);

        if (modelEditor === '') {
            setIsValid(true);
        } else {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/lessons/edit', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                });

                const result = await response.json();
                toast.success("Данные обновлены");

            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const finishLearn = async () => {
        setFinishLearn({
            id: user.id,
            idCourse: idCourse,
            lessonId: lessonId,
        })
    };


    return (
        isLoading ?
            <Example /> :
            <div className="addcours">
                <div>

                    {user.role != "student"
                        ?
                        <div className="learing__header">
                            <div className="addcours__title">Редактирование урока</div>
                            <button className="learing__view _btn _blue" onClick={() => setShow(!show)}>{show ? "Посмотреть" : "Редактировать"}</button>
                        </div>
                        :
                        <div className="learing__header">
                            <div className="addcours__title">Прохождение урока</div>
                            <div></div>
                        </div>

                    }

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
                            <h2 className="learing__title">{title}</h2>
                    }



                    <Editor model={modelEditor} setModel={setModelEditor} show={show} />

                    {isValid && modelValid && (<p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>Заполните поле описания</p>)}

                    {user.role != "student"
                        ?
                        <button type="submit" className="addcours__submit" onClick={onSubmit}>
                            Сохранить изменения
                        </button>
                        :
                        <button type="submit" className="addcours__submit" onClick={finishLearn}>
                            Прошёл
                        </button>
                    }
                    <a href={`/lessons/${idCourse}`} className="addcours__submit _btn _blue">
                        Назад
                    </a>
                </div>
            </div>
    );
}

export default observer(Update);