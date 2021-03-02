import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { ContactMe } from './pages/ContactMe'

export function App() {

  return (
    <main className="App">
      <AppHeader />
      <Switch>
        <Route path="/contact" component={ContactMe} />
        <Route path="/" component={Home} />
      </Switch>
      <AppFooter />
    </main>
  );
}