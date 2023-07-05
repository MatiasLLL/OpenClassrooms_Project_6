import DropDown from '../../components/DropDown'
import AProposImg from '../../assets/apropos-banner-desktop.jpg'
import './index.scss'

function APropos() {
    return (
        <main>
            <section className={'sectionBanner apropos'}>
                <picture className={'banner apropos'}>
                    <img
                        className={'bannerImg apropos'}
                        src={AProposImg}
                        alt="Mountain landscape"
                    />
                    <div className={'bannerShadow apropos'}></div>
                </picture>
            </section>
            <section className={'sectionDropDown'}>
                <DropDown
                    title={'Fiabilité'}
                    content={`Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`}
                />
                <DropDown
                    title={'Respect'}
                    content={`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`}
                />
                <DropDown
                    title={'Service'}
                    content={`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`}
                />
                <DropDown
                    title={'Sécurité'}
                    content={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}
                />
            </section>
        </main>
    )
}

export default APropos
