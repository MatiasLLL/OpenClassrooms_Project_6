import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/logo-footer.svg'
import './index.scss'

function Footer() {
    return (
        <footer>
            <Link
                className={'logoKasaFooter'}
                to="/"
                onClick={() => {
                    window.scroll(0, 0)
                }}
            >
                <img src={LogoFooter} alt={'Logo Kasa'} />
            </Link>
            <p className={'footerText'}>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
