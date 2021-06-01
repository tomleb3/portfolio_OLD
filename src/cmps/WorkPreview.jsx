import { useContext } from 'react'
import { SettingsContext } from '../App'
import { utilService } from '../services/utilService'

const getFrameworkLogoUrl = frameworkName => {

    const cloudinaryBaseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL
    switch (frameworkName) {
        case 'react':
            return `${cloudinaryBaseUrl}/reactJS_cvqqdx.svg`
        case 'angular':
            return `${cloudinaryBaseUrl}/angularJS_qxmjk9.svg`
        case 'vue':
            return `${cloudinaryBaseUrl}/vueJS_hcujbj.svg`
        default:
            return `${cloudinaryBaseUrl}/JavaScript_qnyrge.svg`
    }
}

export const WorkPreview = ({ work }) => {

    const { settings } = useContext(SettingsContext)
    const { listView, darkMode } = settings

    let tagsContainer = (
        <div className="tags-container flex wrap a-end">
            {work.tags.map(tag =>
                <a key={utilService.makeId()} href={`//google.com/search?q=${tag}`}
                    target="_blank" rel="noopener noreferrer">#{tag}</a>)}
        </div>
    )

    return <section className={`work-preview flex ${listView ? 'list-view' : 'grid-view'} ${darkMode ? 'dark-mode' : ''}`}>
        <a className="img-container" href={work.linkUrl} target="_blank" rel="noopener noreferrer">
            <img src={work.imgUrl} alt="Project" />
            <img src="https://res.cloudinary.com/tomleb3/image/upload/v1614444043/portfolio/eye_dsatza.svg" alt="View" />
            {work.inDevelopment && <div>In development</div>}
        </a>
        <div className="work-info flex col grow j-between">
            <div className="flex j-between">
                <div className="info-container flex col">
                    <a href={work.linkUrl} target="_blank" rel="noopener noreferrer">
                        <strong>{work.title}</strong>
                    </a>
                    <p>{work.desc}</p>
                    <div className="flex pos-relative">
                        <a href={work.repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
                        <label className="fs16 d-none pointer" htmlFor={`tags-toggler ${work._id}`}>📜</label>
                        <input id={`tags-toggler ${work._id}`} type="checkbox" className="d-none" />
                        {tagsContainer}
                    </div>
                </div>
                <img src={getFrameworkLogoUrl(work.framework)} alt="" />
            </div>
            <footer className="flex j-between">
                {tagsContainer}
                <a className="flex a-self-end" href={work.linkUrl}>
                    <button className="btn-visit">Visit</button>
                </a>
            </footer>
        </div>
    </section>
}