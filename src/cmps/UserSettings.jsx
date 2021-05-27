import { useContext } from "react"
import { SettingsContext } from "../App"

export const UserSettings = () => {

    const { settings, themeChange, viewChange } = useContext(SettingsContext)
    const { darkMode, listView } = settings
    const clickUrl = `${process.env.PUBLIC_URL}/assets/sounds/click.mp3`
    let audio = new Audio(clickUrl)

    const onChangeTheme = darkMode => {
        audio.play()
        themeChange(darkMode)
    }
    const onChangeView = listView => {
        audio.play()
        viewChange(listView)
    }

    return <main className={`user-settings flex col a-center ${darkMode ? 'dark-mode' : ''}`}>
        <header>
            <label><span>⚙️</span>Settings</label>
        </header>
        <div className="settings-container">
            <div className="theme-container flex j-between a-center">
                <label>Theme</label>
                <div className="flex a-center">
                    <button className={darkMode ? 'inactive' : ''}
                        onClick={() => onChangeTheme(false)}>☀️</button>
                    <div className="border"></div>
                    <button className={darkMode ? '' : 'inactive'}
                        onClick={() => onChangeTheme(true)}>🌑</button>
                </div>
            </div>
            <div className="view-container flex j-between a-center">
                <label>View</label>
                <div className="flex a-center">
                    <button className={listView ? '' : 'inactive'}
                        onClick={() => onChangeView(true)}>List</button>
                    <div className="border"></div>
                    <button className={listView ? 'inactive' : ''}
                        onClick={() => onChangeView(false)}>Grid</button>
                </div>
            </div>
        </div>
    </main>
}