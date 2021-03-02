import { utilService } from '../services/utilService'

const getFrameworkLogoUrl = frameworkName => {
    switch (frameworkName) {
        case 'react':
            return 'https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/reactJS_cvqqdx.svg'
        case 'angular':
            return 'https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/angularJS_qxmjk9.svg'
        case 'vue':
            return 'https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/vueJS_hcujbj.svg'
        default:
            return 'https://res.cloudinary.com/tomleb3/image/upload/v1614506528/portfolio/JavaScript_qnyrge.svg'
    }
}

export const WorkPreview = ({ work }) => {

    return <section className="work-preview">
        <a className="img-container" href={work.linkUrl} target="_blank" rel="noopener noreferrer">
            <img src={work.imgUrl} alt="" />
            <img src="https://res.cloudinary.com/tomleb3/image/upload/v1614444043/portfolio/eye_dsatza.svg" alt="" />
        </a>
        <div className="work-info">
            <div className="flex j-between">
                <div className="info-container flex col">
                    <strong>{work.title}</strong>
                    <p>{work.desc}</p>
                    <span className="muted">Hosted on - <a href={work.hostedOn.hostUrl} target="_blank" rel="noopener noreferrer">{work.hostedOn.hostName}</a></span>
                </div>
                <img src={getFrameworkLogoUrl(work.framework)} alt="" />
            </div>
            {work.tags.map(tag =>
                <a key={utilService.makeId()} href={`//google.com/search?q=${tag}`} target="_blank" rel="noopener noreferrer">#{tag}</a>
            )}
        </div>
    </section>
}