import { Hero } from '../cmps/Hero'
import { Introduction } from '../cmps/Introduction'
import { Skills } from '../cmps/Skills'
import { RecentWork } from '../cmps/RecentWork'
import { ContactCTA } from '../cmps/ContactCTA'
import { EarlyWork } from '../cmps/EarlyWork'

export const Home = () => {

    return <main className="home">
        <Hero />
        <Introduction />
        <Skills />
        <RecentWork />
        <EarlyWork />
        <ContactCTA />
    </main>
}