import { useContext } from "react"
import { SettingsContext } from '../App'
import Typewriter from "typewriter-effect"
import { HeroIcon } from "./Icons/HeroIcon"

export const Hero = () => {

    const { settings } = useContext(SettingsContext)
    const { darkMode } = settings
    const publicUrl = process.env.PUBLIC_URL

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
        <img className="avatar" src={`${publicUrl}/assets/imgs/me.png`} alt="Avatar" />
        <HeroIcon isDarkMode={darkMode} />
    </section>
}