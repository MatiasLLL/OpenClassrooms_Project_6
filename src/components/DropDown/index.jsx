import { useState } from 'react'
import './index.scss'
import Arrow from '../../assets/arrow-dropdown.svg'

function DropDown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    let toggleClassCheck = isOpen ? ' click' : ' close'

    return (
        <div className={`dropDown${toggleClassCheck}`}>
            <div className={'dropDownTitle'} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img
                    className={`dropDownArrow${toggleClassCheck}`}
                    src={Arrow}
                    alt="Arrow Dropdown"
                />
            </div>
            {isOpen ? <p className={'dropDownContent'}>{content}</p> : null}
        </div>
    )
}

export default DropDown
