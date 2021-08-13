import { useContext } from "react"
import { Link } from "react-router-dom"
import { SettingsContext } from '../App'

export const ContactCTA = () => {

    const { settings } = useContext(SettingsContext)
    const { darkMode } = settings

    return <section className={`contact-cta main-layout flex j-around a-center ${darkMode ? 'dark-mode' : ''}`}>
        <strong>Got any questions for me?</strong>
        <p>Feel free to send me a message regarding anything and everything</p>
        <Link to="/contact">
            <button>Contact Me</button>
        </Link>
    </section >
}