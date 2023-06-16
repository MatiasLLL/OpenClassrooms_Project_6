import { Link } from 'react-router-dom'
import Error404 from '../../assets/404.svg'
import './index.scss'

function Error() {
    return (
        <div className={'errorWrapper'}>
            <img className={'errorImg'} src={Error404} alt={'Erreur 404'} />
            <h1 className={'errorSubtitle'}>
                Il semblerait que la page que vous cherchez n’existe pas
            </h1>
            <Link className={'errorHomeLink'} to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}

export default Error
