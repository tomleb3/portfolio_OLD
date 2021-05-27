import { useContext } from "react"
import { SettingsContext } from '../App'
import Typewriter from "typewriter-effect"

export const Hero = () => {

    const { settings } = useContext(SettingsContext)
    const { darkMode } = settings
    const cloudinaryBaseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL

    return <section className={`hero main-layout flex col j-between ${darkMode ? 'dark-mode' : ''}`}>
        <div>
            <strong>
                <Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString('Tom Lebeodkin')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Fullstack Developer')
                        .start()
                }} />
            </strong>
            <p>Designing and coding fully-fledged applications. Driven by passion</p>
        </div>
        <img className="avatar" src={`${cloudinaryBaseUrl}/me_nlxevb.png`} alt="Avatar" />
        <img className="hero-img" alt="Hero"
            src={`${cloudinaryBaseUrl}/${darkMode ? 'hero-dark_dwsupm' : 'hero_gutctx'}.svg`} />
    </section>
}