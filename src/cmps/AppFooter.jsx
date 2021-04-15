import { FiLinkedin, FiFacebook, FiGithub } from 'react-icons/fi'

export const AppFooter = () => {

    return <footer className="app-footer">
        <div className="content main-layout flex col j-center a-center">
            <div className="social-container">
                <a href="https://www.linkedin.com/in/tomleb/" target="_blank" rel="noopener noreferrer"><FiLinkedin className="social-link" /></a>
                <a href="https://www.facebook.com/tomleb3/" target="_blank" rel="noopener noreferrer"><FiFacebook className="social-link" /></a>
                <a href="https://www.github.com/tomleb3" target="_blank" rel="noopener noreferrer"><FiGithub className="social-link" /></a>
            </div>
            <strong className="muted">&copy; 2021 | Tom Lebeodkin</strong>
            <small>Powered by React</small>
        </div>
    </footer>
}