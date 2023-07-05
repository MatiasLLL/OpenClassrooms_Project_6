import Star from '../../assets/star-rating.svg'
import RedStar from '../../assets/red-star-rating.svg'
import './index.scss'

function Rating({ ratingLocation }) {
    const stars = []

    for (let i = 0; i < ratingLocation; i++) {
        stars.push(<img key={stars} src={RedStar} alt="etoile notation" />)
    }
    for (let i = 0; i < 5 - ratingLocation; i++) {
        stars.push(<img key={stars} src={Star} alt="etoile notation" />)
    }
    return <div className={'rating'}>{stars}</div>
}

export default Rating
