import { useState } from "react"


export const Select = ({ items, handleChange }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState(items[0])

    const OptionClick = (id) => {
        setValue(items.name)
        handleChange(items.name)
        setIsOpen(false)
    }

    return (
        <div className="medotisCourse__item _select">
            <div className="medotisCourse__name _select__name">{value}</div>
            <div className="medotisCourse__arrow _select__arrow" onClick={() => setIsOpen(true)}>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0692 0.764068C23.7701 1.46501 23.824 2.56796 23.2309 3.33075L23.0692 3.51393L13.3469 13.2361C12.646 13.9371 11.543 13.991 10.7803 13.3979L10.5971 13.2361L0.874855 3.51393C0.115502 2.75457 0.115502 1.52342 0.874855 0.764068C1.5758 0.063127 2.67875 0.00920774 3.44153 0.602312L3.62471 0.764068L11.972 9.10983L20.3193 0.764068C21.0202 0.063127 22.1232 0.00920774 22.886 0.602312L23.0692 0.764068Z" fill="#17181C" />
                </svg>
            </div>

            {isOpen && items.map((item) => {
                <div className="medotisCourse__items-list _select__list" onClick={() => OptionClick(item)}>
                    <p>{item.name}</p>
                </div>
            })}

        </div>
    )
}

