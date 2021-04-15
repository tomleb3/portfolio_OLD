import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return <header className="app-header">
        <section className="main-layout flex j-between a-center">
            <NavLink to="/"><img className="logo" src="https://res.cloudinary.com/tomleb3/image/upload/v1614691244/portfolio/logo_epjdqp.png" alt="" /></NavLink>
            <nav>
                <a href="https://docs.google.com/document/d/1sX4zK-SDH9S6hxvfg227bkLnqSMpLCJOE9VXN8ONU2w/edit?usp=sharing"
                    target="_blank" rel="noopener noreferrer">Resume</a>
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
            </nav>
        </section>
    </header>
}