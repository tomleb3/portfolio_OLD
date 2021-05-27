import { createContext, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { Contact } from './pages/Contact'
import { utilService } from './services/utilService'
import { Resume } from './pages/Resume'

export const SettingsContext = createContext(null)

export function App() {

  const STORAGE_KEY = 'user-settings'
  const { loadFromStorage, saveToStorage } = utilService

  const settingsFromStorage = loadFromStorage(STORAGE_KEY)
  const [settings, setSettings] = useState(settingsFromStorage || {})
  
  settings.darkMode ?
    document.body.classList.add('dark-mode')
    : document.body.classList.remove('dark-mode')

  const themeChange = darkMode =>
    setSettings({ ...settings, darkMode })

  const viewChange = listView =>
    setSettings({ ...settings, listView })

  useEffect(() => {
    saveToStorage(STORAGE_KEY, settings)
  }, [settings])

  return (
    <main className="App">
      <SettingsContext.Provider value={{ settings, themeChange, viewChange }}>
        <AppHeader />
        <Switch>
          <Route path="/contact/" component={Contact} />
          <Route path="/resume/" component={Resume} />
          <Route path="/" component={Home} />
        </Switch>
        <AppFooter />
      </SettingsContext.Provider>
    </main>
  )
}