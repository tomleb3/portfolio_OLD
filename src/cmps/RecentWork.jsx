import { WorkList } from './WorkList'
import { workService } from '../services/workService'

export const RecentWork = () => {

    let works = workService.query()
    works = works.filter(work => {
        return work.category === 'recent'
    })

    return <section className="recent-work main-layout">
        <strong>My Recent Works</strong>
        <p>Here are a few projects I've worked on recently</p>
        <WorkList works={works} />
    </section>
}