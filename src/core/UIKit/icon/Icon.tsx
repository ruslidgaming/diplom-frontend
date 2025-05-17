import React from "react";

type Props = {
    systemName: string;
    className?: string;
    cursor?: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    action?: Function;
    width?: number;
    height?: number;
    onClick?: (e: unknown) => void;
};

export const Icon = (props: Props) => {
    const _style: React.CSSProperties = {};

    if (props.width) _style.width = `${props.width}px`;
    if (props.height) _style.height = `${props.height}px`;
    if (props.cursor) _style.cursor = props.cursor;

    const img = new URL(`./img/${props.systemName}.svg`, import.meta.url).href;

    return (
        <div style={_style} className={` ${props.className}`}>
            <img
                draggable="false"
                onClick={props.onClick ? (e) => props.onClick!(e) : () => {}}
                src={img}
                alt=""
                style={_style} 
            />
        </div>
    );
};
