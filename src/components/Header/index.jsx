import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0 100px;
`

const LogoKasa = styled.img`
    height: 68px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 22px;
    row-gap: 40px;
`

function Header() {
    return (
        <HeaderWrapper>
            <Link to="/">
                <LogoKasa src={Logo} />
            </Link>
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/apropos"> À Propos</StyledLink>
            </nav>
        </HeaderWrapper>
    )
}

export default Header
