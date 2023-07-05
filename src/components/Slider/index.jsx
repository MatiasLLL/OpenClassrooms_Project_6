import PropTypes from 'prop-types'
import { useState } from 'react'
import ArrowPrev from '../../assets/arrow-prev.svg'
import ArrowNext from '../../assets/arrow-next.svg'
import './index.scss'

function Slider({ title, pictures }) {
    const [count, setCount] = useState(0)
    const prevPic = () => {
        setCount(count === 0 ? pictures.length - 1 : count - 1)
    }
    const nextPic = () => {
        setCount(count === pictures.length - 1 ? 0 : count + 1)
    }
    const currentPic = [count + 1]

    if (pictures.length === 1) {
        return (
            <div className={'sliderContainer'}>
                <img className={'sliderImg'} src={pictures[0]} alt={title} />
            </div>
        )
    }
    return (
        <div className={'sliderContainer'}>
            <div>
                <img
                    className={'sliderImg'}
                    src={pictures[count]}
                    alt={title}
                />
            </div>
            <img
                className={'prevImg'}
                src={ArrowPrev}
                onClick={prevPic}
                alt={'ArrowPrev'}
            />
            <img
                className={'nextImg'}
                src={ArrowNext}
                onClick={nextPic}
                alt={'ArrowNext'}
            />
            <span
                className={'currentImg'}
            >{`${currentPic}/${pictures.length}`}</span>
        </div>
    )
}

Slider.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default Slider
