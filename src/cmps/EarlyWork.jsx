import { WorkList } from './WorkList'

export const EarlyWork = ({ works }) => {

    works = works.filter(work => {
        return work.category === 'early'
    })

    return <section className="early-work main-layout">
        <strong>My earlier Works</strong>
        <p>Also, a few projects from my beginnings</p>
        <WorkList works={works} />
    </section>
}