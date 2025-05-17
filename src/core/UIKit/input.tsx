import { HTMLInputTypeAttribute, useState } from "react";
import { Icon } from "@/core/UIKit/icon";
import InputMask from "react-input-mask";

type Props = {
    wrapperClass?: string;
    class?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value?: number | string;
    icon?: string;
    iconClass?: string;
    iconActive?: string;
    isRequired?: boolean;
    isFrontIcon?: boolean;
    measure?: string;
    headerText?: string;
    headerTextStyle?: string;
    underlineText?: string;
    underlineTextStyle?: string;
    minValue?: any;
    maxValue?: any;
    disabled?: boolean;
    notAllBorder?: boolean;
    id?: any;
    readonly?: boolean;
    lengthOptions?: { minLength: number; maxLength: number };
    onChange?: (value: any, isValid?: ValidationResult, target?: any) => void;
    validationCallback?: (props: string) => ValidationResult;
    onFocus?: (value: any) => void;
    onBlur?: (value: any) => void;
};

export type ValidationResult = {
    success: boolean;
    message?: string | null;
};

export interface ValidationEvent<T> extends React.ChangeEvent<T> {
    valid?: boolean;
}

const phoneMask = "+7 (999) 999-99-99";

export const Input = (props: Props) => {
    const [validMessage, setMessage] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const InputComponent = props.type === "phone" ? InputMask : "input";

    const handleFocus = () => {
        setIsFocused(true);
        if (props.onFocus) props.onFocus(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (props.onBlur) props.onBlur(false);
    };

    const handleChange = (e: any) => {
        const newValue = e.target.value;

        if (props.lengthOptions) {
            if (newValue.length > props.lengthOptions.maxLength) {
                return;
            }
        }

        props.onChange &&
            props.onChange(
                newValue,
                props.validationCallback && props.validationCallback(newValue)!,
                e
            );
        setMessage(e.target.validationMessage);
    };

    const iconToShow =
        isFocused && props.iconActive ? props.iconActive : props.icon;

    const measureShow = props.measure;


    return (
        <div className={`flex flex-col ${props.wrapperClass} relative`}>
            {props.headerText && (
                <span className={"font-semibold text-[16px] mb-1 " + props.headerTextStyle}>
                    {props.headerText}{" "}
                    {props.isRequired && <span className="text-[#C30707]">*</span>}
                </span>
            )}

            <div className="flex items-center w-full relative">
                <InputComponent
                    maskChar={null}
                    readOnly={props.readonly}
                    disabled={props.disabled}
                    maxLength={props.lengthOptions?.maxLength}
                    min={props.minValue}
                    max={props.maxValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    mask={props.type === "phone" ? phoneMask : ""}
                    type={props.type}
                    className={`w-full rounded-lg border-[#4A85F6] outline-none py-1.5 disabled:bg-zinc-200 font-normal ${props.class
                        } ${props.isFrontIcon ? "px-8" : "px-2.5"} ${props.measure ? "rounded-r-none" : ""
                        } ${isFocused ? "border-[#4A85F6]" : "border-[#BCBCBC]"} ${props.notAllBorder ? "" : "border-2"} ${iconToShow && !props.isFrontIcon ? "pr-8" : "pr-2"} `}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={handleChange}
                    id={props.id}
                />

                {measureShow && (
                    <div
                        className={`flex items-center justify-center text-sm  border-2 outline-none rounded-lg rounded-l-none border-l-0 h-[38px]  ${isFocused
                            ? "border-[#4A85F6] text-[#4A85F6]"
                            : "border-[#BCBCBC] text-gray-500"
                            }`}
                    >
                        <span className="px-2 py-1.5 text-[18px]">{props.measure}</span>
                    </div>
                )}

                {iconToShow && (
                    <div className={`text-gray-500 absolute top-1/2 transform -translate-y-1/2 ${props?.iconClass} ${props.isFrontIcon ? "left-2" : "right-2"}`}>
                        <Icon
                            systemName={iconToShow}
                            className="text-gray-500"
                            height={20}
                            width={20}
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-col mt-1">
                {validMessage && (
                    <span
                        className={
                            "text-[#CB0D0D] text-[12px] mb-1 " + props.underlineTextStyle
                        }
                    >
                        {validMessage}
                    </span>
                )}
                {props.underlineText && (
                    <span
                        className={
                            "text-[#757575] text-[12px] mb-1 " + props.underlineTextStyle
                        }
                    >
                        {props.underlineText}
                    </span>
                )}
            </div>
        </div>
    );
};
