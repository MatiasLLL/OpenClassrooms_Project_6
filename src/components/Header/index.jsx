import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './index.scss'

function Header() {
    return (
        <header>
            <NavLink
                className={({ isActive }) => (isActive ? 'linkNav' : 'linkNav')}
                to="/"
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
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'linkNav active' : 'linkNav'
                    }
                    to="/apropos"
                >
                    À Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header

// className={({ isActive, isPending }) =>
//                         isPending
//                             ? 'linkNav pending'
//                             : isActive
//                             ? 'linkNav active'
//                             : 'linkNav'
//                     }

// return (
//     <header>
//         <NavLink className={'logoKasaHeader'} to="/">
//             <img src={Logo} alt={'Logo Kasa'} />
//         </NavLink>
//         <nav>
//             <NavLink className={'linkNav'} to="/">
//                 Accueil
//             </NavLink>
//             <NavLink className={'linkNav'} to="/apropos">
//                 À Propos
//             </NavLink>
//         </nav>
//     </header>
// )
