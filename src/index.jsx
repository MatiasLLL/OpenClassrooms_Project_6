import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/index.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<APropos />} />
                <Route path="/fichelogement/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)

// useRouteError

// errorElement={<ErrorBoundary />}

// function ErrorBoundary() {
//     let error = useRouteError()
//     console.error(error)
//     // Uncaught ReferenceError: path is not defined
//     return <div>Il semblerait que la page que vous cherchez n’existe pas</div>
// }
