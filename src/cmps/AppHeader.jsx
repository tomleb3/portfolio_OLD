import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return <header className="app-header">
        <section className="main-layout flex j-between a-center">
            <NavLink to="/"><img className="logo" src="https://res.cloudinary.com/tomleb3/image/upload/v1614691244/portfolio/logo_epjdqp.png" alt="" /></NavLink>
            <nav>
                <NavLink to="/contact" activeClassName="active-link">Contact Me</NavLink >
            </nav>
        </section>
    </header>
}