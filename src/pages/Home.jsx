import { Hero } from '../cmps/Hero'
import { Introduction } from '../cmps/Introduction'
import { Skills } from '../cmps/Skills'
import { RecentWork } from '../cmps/RecentWork'
import { ContactCTA } from '../cmps/ContactCTA'
import { EarlyWork } from '../cmps/EarlyWork'
import { workService } from '../services/workService'

export const Home = () => {

    let works = workService.query()

    return <main className="home">
        <Hero />
        <Introduction />
        <Skills />
        <RecentWork works={works} />
        <EarlyWork works={works} />
        <ContactCTA />
    </main>
}