import { lazy, Suspense, useContext, useEffect } from 'react'
import { SettingsContext } from '../App'
import { Hero } from '../cmps/Hero'
import { Introduction } from '../cmps/Introduction'
import { Spinner } from '../cmps/Spinner'
import { workService } from '../services/workService'

const Skills = lazy(() => import('../cmps/Skills').then(module => ({ default: module.Skills })))
const RecentWork = lazy(() => import('../cmps/RecentWork').then(module => ({ default: module.RecentWork })))
const EarlyWork = lazy(() => import('../cmps/EarlyWork').then(module => ({ default: module.EarlyWork })))
const ContactCTA = lazy(() => import('../cmps/ContactCTA').then(module => ({ default: module.ContactCTA })))

export const Home = () => {

    const { settings } = useContext(SettingsContext)
    const { darkMode } = settings
    let works = workService.query()

    useEffect(() => {
        window.scrollTo({ top: 0 })
        document.title = 'Tom Leb\'s Portfolio'
    }, [])

    return <main className="home">
        <Hero />
        <Suspense fallback={
            <article className={`spinner-container ${darkMode ? 'dark-mode' : ''}`}>
                <Spinner />
            </article>
        }>
            <Introduction />
            <Skills />
            <RecentWork works={works} />
            <EarlyWork works={works} />
            <ContactCTA />
        </Suspense>
    </main>
}