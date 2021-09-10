import { FacebookIcon } from './Icons/FacebookIcon'
import { GithubIcon } from './Icons/GithubIcon'
import { LinkedinIcon } from './Icons/LinkedinIcon'

export const AppFooter = () => {

    return <footer className="app-footer">
        <div className="content main-layout flex col j-center a-center">
            <div className="social-container">
                <a name="My Linkedin profile" href="https://www.linkedin.com/in/tomleb/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                </a>
                <a name="My Facebook profile" href="https://www.facebook.com/tomleb3/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a name="My Github page" href="https://www.github.com/tomleb3" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </div>
            <strong className="muted">&copy; 2021 | Tom Lebeodkin</strong>
            <small>Powered by React</small>
        </div>
    </footer>
}