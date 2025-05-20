import { Outlet } from "react-router-dom"

export default function DivInput({
    className = "",
    label = "",
    id = '',
    children
}) {
    return (
        <div className={`input__wrapper ${className || ''}`}>

            {label ? <label className="input__title" htmlFor={id ?? ""}> {label || ""} </label > : ""}
            <div className="input__input">
                {children}
            </div>
        </div>
    )
}
