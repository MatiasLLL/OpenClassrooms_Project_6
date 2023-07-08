import { useFetch } from '../../hooks'
import Banner from '../../components/Banner'
import Card from '../../components/CardGallery'
import HomeImg from '../../assets/home-banner-desktop.jpg'
import './index.scss'

function Home() {
    const BannerHome = HomeImg
    const { data, error } = useFetch('/logements.json')
    if (error) {
        return <span>Il y a un problème</span>
    }
    return (
        <main>
            <Banner image={BannerHome} title="Seaside landscape" />
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
