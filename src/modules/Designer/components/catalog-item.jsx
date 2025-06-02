// import { useEffect, useState } from 'react';

// export default function CoursesItem({ id, title, apiUrl = 'http://127.0.0.1:8000/api/admin/course/show' }) {
// export default function CoursesItem({ model }) {

//     const id = model.get('attributes').id || "";
//     const image = model.get('attributes').image || "";
//     const name = model.get('attributes').name || "";
//     const mini_description = model.get('attributes').mini_description || "";

//     return (
//         <div className="courses__item item-course">
//             <div>
//                 <div className="item-course__img">
//                     <img
//                         src={course?.image ? `http://127.0.0.1:8000/storage/${image}` : '/placeholder.jpg'}
//                         alt={course?.title || title || "Название курса"}
//                     />
//                 </div>
//                 <h5 className="item-course__name">{name || "Название курса"}</h5>
//                 <p className="item-course__text">{mini_description || "Описание курса"}</p>
//             </div>
//             <div className="item-course__btns">
//                 <a className="item-course__btn _btn _blue" href={`/admin/courses/edit/${id || ""}`}>
//                     Подробнее
//                 </a>
//                 <a className="item-course__link _btn" href={`/lessons/${id || ''}`}>
//                     Уроки
//                 </a>
//             </div>
//         </div>
//     );
// }



export default function CoursesItem() {
    return <>
        <h1>Привет</h1>
    </>;
}
