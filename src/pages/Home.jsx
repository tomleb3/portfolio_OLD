import { Hero } from '../cmps/Hero'
import { Introduction } from '../cmps/Introduction'
import { Skills } from '../cmps/Skills'
import { RecentWork } from '../cmps/RecentWork'
import { ContactCTA } from '../cmps/ContactCTA'
import { EarlyWork } from '../cmps/EarlyWork'
import { workService } from '../services/workService'
import { useEffect } from 'react'

export const Home = () => {

    let works = workService.query()

    useEffect(() => {
        window.scrollTo({ top: 0 })
        document.title = 'Tom Leb\'s Portfolio'
    }, [])

    return <main className="home">
        <Hero />
        <Introduction />
        <Skills />
        <RecentWork works={works} />
        <EarlyWork works={works} />
        <ContactCTA />
    </main>
}