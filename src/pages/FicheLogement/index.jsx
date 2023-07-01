import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { useFetch } from '../../hooks'
import DropDown from '../../components/DropDown'
import Slider from '../../components/Slider'
import './index.scss'

function FicheLogement() {
    // const { data, error } = useFetch('/logements.json')
    const [currentLocation, setCurrentLocation] = useState()
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        fetch('/logements.json').then((response) =>
            response
                .json()
                .then((result) => {
                    result.forEach((logement) => {
                        if (logement.id === params.id) {
                            setCurrentLocation(logement)
                        }
                    })
                    setLoading(false)
                })
                .catch((err) => console.log(err))
        )
    }, [params])
    if (loading) {
        return <p>Chargement du logement</p>
    }
    if (currentLocation === undefined) {
        return navigate('/error404')
    }
    return (
        <main className={'sectionLogement'}>
            <Slider
                key={currentLocation.id}
                title={currentLocation.title}
                pictures={currentLocation.pictures}
            />
            <aside className={'asideLogement'}>
                <div className={'contentLogement'}>
                    <h1 className={'titleLogement'}>{currentLocation.title}</h1>
                    <p className={'locationLogement'}>
                        {currentLocation.location}
                    </p>
                    <ul className={'tagListLogement'}>
                        {currentLocation.tags?.map((tag) => (
                            <li className={'tagLogement'}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className={'hostLogement'}>
                    <div className={'infoHost'}>
                        <p className={'nameHost'}>
                            {currentLocation.host.name}
                        </p>
                        <img
                            src={currentLocation.host.picture}
                            alt={`Propiétaire : ${currentLocation.host.name}`}
                        />
                    </div>
                    {/* <input currentLocation.rating/> */}
                </div>
            </aside>
            <div className={'dropdownLogement'}>
                <DropDown
                    title={'Description'}
                    content={currentLocation.description}
                />
                <DropDown
                    title={'Équipements'}
                    content={
                        <ul className={'listEquipements'}>
                            {currentLocation.equipments?.map((equipement) => (
                                <li className={'equipementLogement'}>
                                    {equipement}
                                </li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </main>
    )
}

export default FicheLogement

// (result) => {
//     result.forEach

// useEffect(() => {
//     fetch("/logements.json").then((response) =>
//       response
//         .json()
//         .then((result) => {
//           if (result.some((logement) => logement.id === params.rentalId)) {
//             const thisRental = result.filter(
//               (logement) => logement.id === params.rentalId
//             )[0];
//             setCurrentLocation(thisRental);
//           }
//         })
//         .catch((err) => console.log(err))
//     );
//   }, [params]);

// const [data, setData] = useState([])
// const [error, setError] = useState(false)
// useEffect(() => {
//     async function fetchData() {
//         try {
//             const res = await fetch('/logements.json')
//             const logements = await res.json()
//             setData(logements)
//         } catch (err) {
//             setError(true)
//         }
//     }
//     fetchData()
// }, [])

/////////////////////////////////////////////////////////////////////////////////

// let location = []
//     for (let location of data) {
//         console.log(location)
//         if (id === location.id) {
//             setCurrentLocation(location)
//         }
//         // return [currentLocation]
//     }

// <main className={'sectionLogement'}>
//             {location?.map(() => (
//                 <Slider
//                     id={currentLocation.id}
//                     key={currentLocation.id}
//                     title={currentLocation.title}
//                     pictures={currentLocation.pictures}
//                 />
//             ))}
//         </main>

// <main>
//            {data?.map((logement, index) => (
//                <div
//                    key={`${logement.id}-${index}`}
//                   title={logement.title}
//                   cover={logement.cover}
//               ></div>
//            ))}
//        </main>

// <Caroussel />
//             <aside>
//                 <div>
//                     <h1>{title}</h1>
//                     <p>{location}</p>
//                     <div>
//                         <p>{tags}</p>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <p>{name}</p>
//                         <img src={picture} alt="Propiétaire" />
//                     </div>
//                     <Ratings />
//                 </div>
//                 <div>
//                     <DropDown title="Description" content="element"></DropDown>
//                     <DropDown title="Équipements" content="element"></DropDown>
//                 </div>
//             </aside>
