import { useCallback, useEffect } from "react"
import PortalModal from "./portal"
import { Icon } from "../icon"

type Props = {
    show: boolean
    title?: string;
    setShow: (value: boolean) => void;
    onOpen?: (value: any) => void;
    children: JSX.Element;
    onExit?: () => void;
    wrapperClass?: string;
    className?: string;
    classTitle?: string;
    classClose?: string;
}

export const Modal = ({ children, show, setShow, title, onExit, onOpen, wrapperClass, className, classTitle, classClose }: Props) => {

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") setShow(false)
    }, [])

    useEffect(() => {
        if (show) {
            document.addEventListener("keydown", handleKeyPress)
            return () => {
                document.removeEventListener("keydown", handleKeyPress)
            }
        }
    }, [handleKeyPress, show])

    return (
        <>
            {show && (
                <PortalModal wrapperId='modal-portal'>
                    <div className={"h-screen w-screen top-0 left-0 fixed  bg-[#192038] bg-opacity-40 z-50 " + wrapperClass}>
                        <div className="flex h-full w-full items-center justify-center">
                            <div className={"flex flex-col bg-white rounded-lg p-5 " + className}>
                                <div className={`flex justify-between w-full ${classTitle && classTitle}`}>
                                    <span className={`text-[#222B45] font-semibold text-[17px]`}>{title && title}</span>
                                    <Icon systemName="close" className={`cursor-pointer ${classClose && classClose}`} width={24} height={24} onClick={() => setShow(false)} />
                                </div>
                                <hr className="w-[calc(100% + 40px)] -mx-5 my-2 border-t-[#EFF4FA] border-1" />
                                {children}
                            </div>
                        </div>
                    </div>
                </PortalModal>
            )}
        </>
    )
}