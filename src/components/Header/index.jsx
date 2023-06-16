import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './index.scss'

function Header() {
    return (
        <header>
            <Link className={'logoKasaHeader'} to="/">
                <img src={Logo} alt={'Logo Kasa'} />
            </Link>
            <nav>
                <Link className={'linkNav'} to="/">
                    Accueil
                </Link>
                <Link className={'linkNav'} to="/apropos">
                    À Propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
