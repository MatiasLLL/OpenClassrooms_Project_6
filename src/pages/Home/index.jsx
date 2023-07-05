import { useFetch } from '../../hooks'
import Card from '../../components/CardGallery'
import HomeImg from '../../assets/home-banner-desktop.jpg'
import '../../style/Banner.scss'
import './index.scss'

function Home() {
    const { data, error } = useFetch('/logements.json')
    if (error) {
        return <span>Il y a un problème</span>
    }
    return (
        <main>
            <section className={'sectionBanner home'}>
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
            <section className={'gallery'}>
                {data?.map((logement) => (
                    <Card
                        id={logement.id}
                        key={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home
