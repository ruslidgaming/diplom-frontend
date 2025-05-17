type Props = {
    children?: React.ReactNode;
    class?: string;
    onClick?: (e: any) => void;
    disabled?: boolean
    type?: "button" | "submit" | "reset"
    style?: React.CSSProperties;
}

export const Button = (props: Props) => {
    return (
        <button
            name="button"
            type={props.type ?? "button"}
            disabled={props.disabled}
            className={`${props.class} ${props.disabled ? "bg-[#bcbcbc]" : ""} flex items-center cursor-pointer flex-row rounded-lg text-white py-2 disabled:cursor-default`}
            onClick={(e) => { 
                if (props.type !== "submit") {
                    e.preventDefault();
                    e.stopPropagation();
                }
                props.onClick != undefined && props.onClick(e) 
            }}

            style={props.style} 
        >
            {props.children}
        </button>
    )
}