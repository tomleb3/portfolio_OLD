import { useContext } from 'react'
import { WorkPreview } from './WorkPreview'
import { SettingsContext } from '../App'

export const WorkList = ({ works }) => {

    const { settings } = useContext(SettingsContext)

    if (!works.length) return <div>Loading...</div>

    return <div className={`work-list ${settings.listView ? 'list-view' : 'grid-view'}`}>
        {works.map(work => {
            return <WorkPreview work={work} key={work._id} />
        })}
    </div>
}