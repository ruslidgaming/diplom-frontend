import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
    // onBlur?: (value: boolean) => void;
    wrapperClass?: string;
    class?: string;
    placeholder?: string;
    value?: number | string;
    isRequired?: boolean;
    headerText?: string;
    headerTextStyle?: string;
    underlineText?: string;
    underlineTextStyle?: string;
    id?: any,
    disabled?: boolean,
    onChange?: (value: any, isValid?: ValidationResult, target?: any) => void;
    onFocus?: (value: any) => void;
    onBlur?: (value: any) => void;
    validationCallback?: (props: string) => ValidationResult
}


export type ValidationResult = {
    success: boolean,
    message?: string | null
}

export interface ValidationEvent<T> extends React.ChangeEvent<T> {
    valid?: boolean
}


export const Password = (props: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (props.onFocus) props.onFocus(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (props.onBlur) props.onBlur(false);
    };

    return (
        <div className={`flex flex-col ${props.wrapperClass} relative`}>
            <span className={"font-semibold 2xl:text-[13px] text-[11px] mb-1 " + props.headerTextStyle}>{props.headerText} {props.isRequired && <span className="text-[#C30707]">*</span>}</span>
            <div className="relative">
                <input
                    disabled={props.disabled ? true : false}
                    type={showPassword ? "text" : "password"}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`border-2 w-full rounded-md outline-none py-1.5 pr-10 disabled:bg-zinc-200 ${props.class
                        }  ${isFocused ? "border-[#4A85F6]" : "border-[#BCBCBC]"}`}
                    value={props.value}
                    id={props.id}
                    placeholder={props.placeholder}
                    onChange={(e) => { props.onChange && props.onChange(e.target.value, props.validationCallback && props.validationCallback(e.target.value)!, e); }} />
                {
                    !showPassword ? <FiEye className="absolute top-[30%] right-[5%] cursor-pointer w-[22px] h-[22px]" onClick={togglePasswordVisibility} /> : <FiEyeOff onClick={togglePasswordVisibility} className="absolute top-[30%] right-[5%] cursor-pointer w-[22px] h-[22px]" />
                }
            </div>

            <span className={"text-[#757575] text-[12px] mb-1 " + props.underlineTextStyle}>{props.underlineText}</span>
        </div>
    )
}