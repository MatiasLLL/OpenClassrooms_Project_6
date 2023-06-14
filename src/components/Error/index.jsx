import { Link } from 'react-router-dom'
import Error404 from '../../assets/404.svg'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorImg = styled.img`
    max-height: 263px;
    margin: 7%;
`

const ErrorSubtitle = styled.h1`
    text-decoration: none;
    font-size: 36px;
    margin: 4%;
`

const HomeLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    margin: 7%;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorImg src={Error404} />
            <ErrorSubtitle>
                Il semblerait que la page que vous cherchez n’existe pas
            </ErrorSubtitle>

            <HomeLink to="/">Retourner sur la page d’accueil</HomeLink>
        </ErrorWrapper>
    )
}

export default Error
