import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './index.scss'

function Header() {
    return (
        <header>
            <NavLink
                className={({ isActive }) => (isActive ? 'linkNav' : 'linkNav')}
                to="/"
                onClick={() => {
                    window.scroll(0, 0)
                }}
            >
                <img
                    className={'logoKasaHeader'}
                    src={Logo}
                    alt={'Logo Kasa'}
                />
            </NavLink>
            <nav>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'linkNav active' : 'linkNav'
                    }
                    to="/"
                    onClick={() => {
                        window.scroll(0, 0)
                    }}
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'linkNav active' : 'linkNav'
                    }
                    to="/apropos"
                    onClick={() => {
                        window.scroll(0, 0)
                    }}
                >
                    À Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
