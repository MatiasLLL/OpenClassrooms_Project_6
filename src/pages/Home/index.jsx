import '../../style/Banner.scss'
import './index.scss'
import HomeImg from '../../assets/home-banner-desktop.jpg'
import Card from '../../components/CardGallery'
import { useFetch } from '../../hooks'
// import Logement from '../../datas/logements.json'

function Home() {
    return (
        <main>
            <section className={'sectionBanner'}>
                <picture className={'banner'}>
                    <img
                        className={'bannerImg'}
                        src={HomeImg}
                        alt="Seaside landscape"
                    />
                    <div className={'bannerShadow'}>
                        <span className={'bannerTxt'}>
                            Chez vous, partout et ailleurs
                        </span>
                    </div>
                </picture>
            </section>
            <GalleryLogement />
        </main>
    )
}

function GalleryLogement() {
    const url = '../../datas/logements.json'
    const { data, error } = useFetch(url)
    const logementList = data?.logementList

    if (error) {
        return <span>Il y a un problème</span>
    }

    return (
        <section className={'gallery'}>
            <div>
                {logementList?.map((logement, index) => (
                    <Card
                        key={`${logement.id}-${index}`}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </section>
    )
}

export default Home
