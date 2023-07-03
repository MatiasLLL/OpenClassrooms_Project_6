import PropTypes from 'prop-types'
// import ArrowPrev from '../../assets/arrow-prev.svg'
// import ArrowNext from '../../assets/arrow-next.svg'

import './index.scss'

function Slider({ title, pictures }) {
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
                <img className={'sliderImg'} src={pictures[0]} alt={title} />
            </div>
            {/* <span>{text}</span> */}
            {/* <button src={ArrowPrev} /> */}
            {/* <button src={ArrowNext} /> */}
        </div>
    )
}

Slider.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default Slider

// const order = index > activeIndex ?
//       ORDER_NEXT :
//       ORDER_PREV
