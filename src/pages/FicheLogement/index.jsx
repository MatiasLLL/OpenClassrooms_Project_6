import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import DropDown from '../../components/DropDown'
import Slider from '../../components/Slider'
import Rating from '../../components/Rating'
import './index.scss'

function FicheLogement() {
    const [currentLocation, setCurrentLocation] = useState()
    const [loading, setLoading] = useState(true)
    const params = useParams()
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
        return (
            <div className={'loadingLogement'}>
                <p>Chargement du logement</p>
            </div>
        )
    }
    if (currentLocation === undefined) {
        return <Navigate to="/error404" />
    }
    return (
        <main className={'sectionLogement'}>
            <Slider
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
                            <li key={tag} className={'tagLogement'}>
                                {tag}
                            </li>
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
                    <Rating ratingLocation={currentLocation.rating} />
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
                                <li
                                    key={equipement}
                                    className={'equipementLogement'}
                                >
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
