import './index.scss'
import Star from '../../assets/star-rating.svg'
import RedStar from '../../assets/red-star-rating.svg'

function Rating({ ratingLocation }) {
    if (ratingLocation === '1') {
        return (
            <div className={'rating'}>
                <img src={RedStar} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
            </div>
        )
    }
    if (ratingLocation === '2') {
        return (
            <div className={'rating'}>
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
            </div>
        )
    }
    if (ratingLocation === '3') {
        return (
            <div className={'rating'}>
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
            </div>
        )
    }
    if (ratingLocation === '4') {
        return (
            <div className={'rating'}>
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={Star} alt="etoile notation" />
            </div>
        )
    }
    if (ratingLocation === '5') {
        return (
            <div className={'rating'}>
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
                <img src={RedStar} alt="etoile notation" />
            </div>
        )
    }
}

export default Rating
