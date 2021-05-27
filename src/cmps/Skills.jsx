import { useContext } from "react"
import { SettingsContext } from '../App'

export const Skills = () => {

    const { settings } = useContext(SettingsContext)
    const { listView, darkMode } = settings

    return <section className={`skills main-layout flex j-between ${darkMode ? 'dark-mode' : ''}`}>
        <div className="flex col">
            <img src="https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/designer_uyufed.svg" alt="" />
            <strong>Frontend</strong>
            <p>I value simple and refined code,<br />
                 clean design patterns,<br />
                  and good UI/UX</p>
            <label>Relevant Technologies:</label>
            <span>HTML5, CSS3 & SCSS, JavaScript ES6</span>
        </div>
        <div className="flex col">
            <img src="https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/frontend_gjls0f.svg" alt="" />
            <strong>Backend</strong>
            <p>I like to keep it clean and efficient,<br />
                with an emphasis on security</p>
            <label>Relevant Technologies:</label>
            <span>Node.js, Socket.IO, APIs & REST</span>
        </div>
        <div className="flex col">
            <img src="https://res.cloudinary.com/tomleb3/image/upload/v1614182071/portfolio/mentor_mugxwq.svg" alt="" />
            <strong>Databases</strong>
            <p>Hands-on experience with<br />
                2 of the most used DBs</p>
            <label>Relevant Technologies:</label>
            <span>MongoDB, MySQL</span>
        </div>
    </section>
}