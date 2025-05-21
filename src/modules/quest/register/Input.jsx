import { Children } from "react"
import { Outlet } from "react-router-dom"

export default function Input({
    className = "",
    label = "",
    id = '',
    value,
    onChange = () => { },
    errors = "",
    placeholder = "",
    type = "",
    required = false,
    children = "",
}) {
    return (
        <>

            <div className={`input__wrapper ${className || ''}`}>
                {label ? <label className="input__title" htmlFor={id ?? ""}> {label || ""} {required && <span style={{ color: "red" }}>*</span>}</label > : ""}
                <div className={`input__input ${errors && "_error"}`}>
                    <input type={type || "text"} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
                </div>
                {children && children}
            </div>

            {errors && (<p style={{ color: "red" }}>{errors}</p>)}
        </>
    )
}
