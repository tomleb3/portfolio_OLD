import { useContext } from "react"
import { SettingsContext } from '../App'
import { BackendIcon } from "./Icons/BackendIcon"
import { FrontendIcon } from "./Icons/FrontendIcon"
import { MentorIcon } from "./Icons/MentorIcon"

export const Skills = () => {

    const { settings } = useContext(SettingsContext)
    const { darkMode } = settings

    return <section className={`skills main-layout flex j-between ${darkMode ? 'dark-mode' : ''}`}>
        <div className="flex col j-between">
            <span className="w--100">
                <FrontendIcon isDarkMode={darkMode} />
            </span>
            <strong>Frontend</strong>
            <p className="grow">I value simple and refined code,<br />
                 clean design patterns,<br />
                  and good UI/UX</p>
            <label>Relevant Technologies:</label>
            <span>HTML5, CSS3 & JavaScript ES6</span>
        </div>
        <div className="flex col j-between">
            <span className="w--100">
                <BackendIcon isDarkMode={darkMode} />
            </span>
            <strong>Backend</strong>
            <p className="grow">I like to keep it clean and efficient,<br />
                with an emphasis on security</p>
            <label>Relevant Technologies:</label>
            <span>Node.js, Socket.IO, APIs & REST</span>
        </div>
        <div className="flex col j-between">
            <span className="w--100">
                <MentorIcon isDarkMode={darkMode}  />
            </span>
            <strong>Databases</strong>
            <p className="grow">Hands-on experience with<br />
                2 of the most used DBs</p>
            <label>Relevant Technologies:</label>
            <span>MongoDB, MySQL</span>
        </div>
    </section>
}