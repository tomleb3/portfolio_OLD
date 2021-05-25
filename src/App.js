import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { Contact } from './pages/Contact'
import { createContext, useState } from 'react'

export const ScrollContext = createContext(null)

export function App() {

  const [isScrollUp, toggleIsScrollUp] = useState(true)
  
  const handleScroll = ev => {
    ev.nativeEvent.wheelDelta > 0
      ? !isScrollUp && toggleIsScrollUp(true)
      : isScrollUp && toggleIsScrollUp(false)
  }

  return (
    <main className="App" onWheel={handleScroll}>
      <ScrollContext.Provider value={isScrollUp}>
        <AppHeader />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <AppFooter />
      </ScrollContext.Provider>
    </main>
  );
}