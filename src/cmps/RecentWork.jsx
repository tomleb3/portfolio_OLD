import { WorkList } from './WorkList'

export const RecentWork = ({ works }) => {

    works = works.filter(work => {
        return work.category === 'recent'
    })

    return <section className="recent-work main-layout">
        <strong>My Recent Works</strong>
        <p>Here are a few projects I've worked on recently</p>
        <WorkList works={works} />
    </section>
}