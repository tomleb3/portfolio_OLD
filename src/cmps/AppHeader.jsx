import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ScrollContext } from '../App'

export const AppHeader = () => {

    const isScrollUp = useContext(ScrollContext)

    return <header className={`app-header ${isScrollUp ? 'is-shown' : ''}`}>
        <section className="main-layout flex j-between a-center">
            <NavLink to="/"><img className="logo" src="https://res.cloudinary.com/tomleb3/image/upload/v1614691244/portfolio/logo_epjdqp.png" alt="" /></NavLink>
            <nav>
                <a href="https://drive.google.com/file/d/1mXnY4GmRLUajSwwLrCB2FCL3Kcd0g12z/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">Resume</a>
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
            </nav>
        </section>
    </header>
}