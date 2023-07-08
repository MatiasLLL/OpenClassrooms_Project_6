import { useState } from 'react'
import Arrow from '../../assets/arrow-dropdown.svg'
import './index.scss'

function DropDown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    let toggleClassCheck = isOpen ? ' open' : ' close'

    return (
        <div className={'dropDown'}>
            <div className={'dropDownTitle'} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img
                    className={`dropDownArrow${toggleClassCheck}`}
                    src={Arrow}
                    alt="Arrow Dropdown"
                />
            </div>
            {isOpen ? (
                <div className={`dropDownContent${toggleClassCheck}`}>
                    {content}
                </div>
            ) : null}
        </div>
    )
}

export default DropDown
