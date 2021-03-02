import { WorkPreview } from './WorkPreview'

export const WorkList = ({ works }) => {

    if (!works.length) return <div>Loading...</div>

    return <section className="work-list grid">
        {works.map(work => {
            return <WorkPreview work={work} key={work._id} />
        })}
    </section>
}