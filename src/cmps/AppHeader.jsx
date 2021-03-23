import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return <header className="app-header">
        <section className="main-layout flex j-between a-center">
            <NavLink to="/"><img className="logo" src="https://res.cloudinary.com/tomleb3/image/upload/v1614691244/portfolio/logo_epjdqp.png" alt="" /></NavLink>
            <nav>
                <a href="https://drive.google.com/file/d/1NbPQL4P1dtNDUsMx7qc3dQXWb44DTxp2/view?usp=sharing"
                    activeClassName="active-link" target="_blank" rel="noopener noreferrer">Resume</a>
                <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
            </nav>
        </section>
    </header>
}