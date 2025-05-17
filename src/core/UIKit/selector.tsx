import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Icon } from "./icon";

type Props = {
    title: string;
    items: Item[];
    onSelect?: (item: Item) => void;

    classWripper?: string;
    className?: string;
    titleClass?: string;
    icon?: string;
}

type Item = {
    value: string | number;
    title: string;
}

export const Selector = observer(({ title, items, onSelect, className, classWripper, icon }: Props) => {
    let [isOpen, setOpen] = useState(false)

    const [selected, setSelected] = useState("");

    return (
        <div className={`flex flex-col cursor-pointer relative border-2 rounded-lg py-2 px-2 ${classWripper}`} onClick={() => {
            setOpen(!isOpen)
        }}>
            <div className={`flex items-center gap-2 ${icon && "justify-between"}`}>
                <span className={`${selected != "" ? "text-black" : "text-[#bcbcbc]"}`}>{selected != "" ? selected : title}</span>
                {icon &&
                    <Icon systemName={icon} />
                }
            </div>

            <div className={`absolute left-0 top-[110%] flex flex-col gap-2 w-[350px] bg-white border-[1px] ${isOpen ? "min-w-full w-max !max-h-[150px]" : "max-h-0 hidden border-0 h-0 overflow-hidden"} ${className}`}>
                {items.map(item => (
                    <div className="hover:bg-[#e2e2e2] py-1 px-2" onClick={() => { setSelected(item.title); onSelect && onSelect(item) }}>
                        <span className="">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
})