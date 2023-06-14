import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/logo-footer.svg'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 209px;
    background-color: #000000;
`

const LogoKasaFooter = styled.img`
    max-height: 40px;
    padding-top: 4rem;
`

const FooterSubtitle = styled.p`
    color: #ffffff;
    font-size: 24px;
    padding-top: 1rem;
`

function Footer() {
    return (
        <FooterWrapper>
            <Link to="/">
                <LogoKasaFooter src={LogoFooter} />
            </Link>
            <FooterSubtitle>© 2020 Kasa. All rights reserved</FooterSubtitle>
        </FooterWrapper>
    )
}

export default Footer
