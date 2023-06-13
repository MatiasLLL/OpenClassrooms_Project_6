import { Link } from 'react-router-dom'

function Header() {
    return (
        // <Link to="/"><img Ssrc=""></Link>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey">À Propos</Link>
        </nav>
    )
}

export default Header
