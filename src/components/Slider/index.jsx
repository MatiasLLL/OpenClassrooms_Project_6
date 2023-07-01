import PropTypes from 'prop-types'
import './index.scss'

function Slider({ title, pictures }) {
    if (pictures.length === 1) {
        return <img className={'sliderImg'} src={pictures[0]} alt={title} />
    }
    return (
        <div className={'sliderContainer'}>
            {/* FLECHE PREV */}
            <img className={'sliderImg'} src={pictures[0]} alt={title} />
            {/* FLECHE NEXT */}
        </div>
    )
}

Slider.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default Slider

// <img src={logement.pictures} alt={logement.title} />

// {logement?.map((logement) => (
//     <div
//         className={'sliderImg'}
//         id={logement.id}
//         key={logement.id}
//     >
//         <img src={logement.pictures} alt={logement.title} />
//     </div>
// ))}

// <div>
//                 {data?.map((logement, index) => (
//                     <div
//                         className={'sliderImg'}
//                         key={`${logement.id}-${index}`}
//                     >
//                         <img src={logement.pictures} alt={logement.title} />
//                     </div>
//                 ))}
//             </div>
//
// Slider.propTypes = {
//     pictures: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// }

// title={logement.title}
// pictures={logement.pictures}

// <img
//                className={'sliderImg active'}
//                src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
//alt="alt1"
//            />
//            <img
//                className={'sliderImg'}
//                src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
//               alt="alt2"
//           />
//            <img
//                className={'sliderImg'}
//               src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
//                alt="alt3"
//            /> */}

// const { id } = useParams()
// const { data, error } = useFetch(`/logements.json?id=${id}`)
// if (error) {
//     return <span>Il y a un problème</span>
// }
