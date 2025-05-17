import { useState } from "react"
import { Icon } from "./icon"
type Props = {
    data: FilterItem[]
    title: string
    onClickItem?: (item: FilterItem) => void;
    class?: string
}

type FilterItem = {
    id: number,
    title: string
}

export const Filter = (props: Props) => {
    const [show, setShow] = useState(false)
    return (
        <div className="relative min-w-[250px]">
            <div className="flex justify-center flex-row gap-2 cursor-pointer" onClick={() => setShow(!show)}>
                <span className="font-semibold">{props.title}</span>
                <Icon systemName="arrow-down" />
            </div>
            <div className={`${show ? "" : "hidden"} absolute bg-white p-4 shadow-[0px_2px_15px_0px_rgba(0,0,0,0.2)] w-full max-h-[500px] overflow-y-auto mt-4`}>
                <div className="p-2 border-[#EFF4FA] border-solid border-2">
                    {
                        props.data.map(x =>
                            <div className="cursor-pointer" onClick={() => {props.onClickItem && props.onClickItem(x)}}>
                                {x.title}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}