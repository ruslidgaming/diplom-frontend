import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import ProfileIcon from "../../layout/profileComponents/profileIcons";
import listModel from "./models/model";
import Example from "../../admin/metodisti/components/LottieAnimation";
import loadableModel from "../../../core/UIKit/loadable/Loadable";
import DeleteModal from "../../../core/UIKit/DeleteModal";

function Feedback() {

    const { list, deleteItem, apiListData, setCourseDelete, deleteCourseId, setDelete } = listModel
    const { isLoading, setLoadable } = loadableModel;
    useEffect(() => {
        apiListData(setLoadable)
    }, [])

    return isLoading ? (
        <Example />
    ) : (
        <div className="list-feedback list-column">
            <div className="list-feedback__count">Общее количество заявок: {list.length}</div>
            {list.map((item, index) => {
                return <div key={index} className="list-feedback__item item-feedback list-column__item">
                    <div className="item-feedback__left">
                        <p className="item-feedback__name">{item.name}</p>
                        <a href="tel:" className="item-feedback__tel">{item.telephon}</a>
                    </div>
                    <div className="item-feedback__right">
                        <DeleteModal classNameBtn={"item-course__bnt _btn _red"}
                            idInfo={item.id}
                            btnOnClick={deleteCourseId}
                            onConfirm={setDelete}
                            onCancel={() => console.log('Удаление отменено')}
                            itemName={""}
                            icon
                        />
                        {/* <ProfileIcon name="delete" /> */}
                    </div>
                </div>
            })}
        </div>
    )
}
export default observer(Feedback);