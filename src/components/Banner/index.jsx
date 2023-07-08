import './index.scss'

function Banner({ image, title }) {
    return (
        <section className={'sectionBanner'}>
            <picture className={'banner'}>
                <img className={'bannerImg'} src={image} alt={title} />
                <div className={'bannerShadow'}>
                    <span className={'bannerTxt'}>
                        Chez vous, partout et ailleurs
                    </span>
                </div>
            </picture>
        </section>
    )
}

export default Banner
