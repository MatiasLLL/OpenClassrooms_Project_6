import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './index.scss'

function Card({ cover, title, id }) {
    return (
        <Link className={'card'} to={`/fichelogement/${id}`}>
            <img className={'cardImg'} src={cover} alt={title} />
            <p className={'cardTitle'}>{title}</p>
        </Link>
    )
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card
