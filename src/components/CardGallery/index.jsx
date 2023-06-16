import PropTypes from 'prop-types'
import { useState } from 'react'
import './index.scss'

function Card({ cover, title }) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className={'card'} onClick={() => setIsClicked(!isClicked)}>
            <img className={'cardImg'} src={cover} alt={title} />
            <p className={'cardTitle'}>{title}</p>
        </div>
    )
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card
