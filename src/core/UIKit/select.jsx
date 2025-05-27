import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react"


export const Select = observer(({ items, handleChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState(items[0] || { name: "Курсов нету" });

    useEffect(() => {
        console.log(items)
    }, [items])


    const OptionClick = (item) => {
        setValue(item)
        setIsOpen(false)
    }

    const activeAction = () => {
        setValue({ name: "Курсов нету" })
        if (value?.id) {
            handleChange(value)
        }
        setIsOpen(false)
    }

    return (
        <div className={`medotisCourse__select ${isOpen && "_active"}`}>
            <div className="medotisCourse__select-top">
                <div className="medotisCourse__name _select__name">{value.name}</div>
                <div className="medotisCourse__select-icons">
                    <div className="medotisCourse__arrow _select__arrow" onClick={() => setIsOpen(!isOpen)}
                        style={{
                            rotate: isOpen ? '180deg' : '0deg'
                        }}
                    >
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0692 0.764068C23.7701 1.46501 23.824 2.56796 23.2309 3.33075L23.0692 3.51393L13.3469 13.2361C12.646 13.9371 11.543 13.991 10.7803 13.3979L10.5971 13.2361L0.874855 3.51393C0.115502 2.75457 0.115502 1.52342 0.874855 0.764068C1.5758 0.063127 2.67875 0.00920774 3.44153 0.602312L3.62471 0.764068L11.972 9.10983L20.3193 0.764068C21.0202 0.063127 22.1232 0.00920774 22.886 0.602312L23.0692 0.764068Z" fill="#17181C" />
                        </svg>
                    </div>

                    <div className="medotisCourse__select-chek" onClick={() => activeAction()}>
                        <svg width="24" height="25" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6289 35.9977C14.0383 35.9977 12.4478 35.4062 11.1921 34.1389L2.82085 25.6897C0.393189 23.2395 -0.426902 21.4479 2.00076 18.9977C4.42842 16.5474 6.974 18.2545 9.40166 20.7047L15.6289 27.9977L40 3.99753C42.4277 1.54728 44.0723 -0.450721 46.5 1.99953C48.9277 4.44978 47.607 6.34119 45.1794 8.79144L20.0656 34.1389C18.8099 35.4062 17.2194 35.9977 15.6289 35.9977Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>


            {
                isOpen &&
                <div div className="medotisCourse__select-list">
                    {items.map((item) => (
                        <div key={item.id} className="medotisCourse__select-item _select__list" onClick={() => OptionClick(item)}>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            }
        </div >
    )
})