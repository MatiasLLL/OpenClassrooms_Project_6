import { useState } from 'react'

function DropDown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <span onClick={() => setIsOpen(!isOpen)}>{title}</span>
            {isOpen ? <p>{content}</p> : null}
        </div>
    )
}

export default DropDown
