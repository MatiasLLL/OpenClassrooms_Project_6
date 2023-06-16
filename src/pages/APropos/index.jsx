// import '../../style/Banner.scss'
// import './index.scss'
import AProposImg from '../../assets/apropos-banner-desktop.jpg'

function APropos() {
    return (
        <section className={'sectionHome'}>
            <picture className={'banner'}>
                <img
                    className={'bannerImg'}
                    src={AProposImg}
                    alt="Mountain landscape"
                />
                <div className={'bannerShadow'}></div>
            </picture>
        </section>
    )
}

export default APropos
