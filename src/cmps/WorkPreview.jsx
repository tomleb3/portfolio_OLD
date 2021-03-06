import { useEffect, useState } from 'react';
import { utilService } from '../services/utilService'

const GetWindowsSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}

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

    const windowSize = GetWindowsSize()
    const isDesktopScreen = windowSize.width > 1024

    return <section className="work-preview">
        <a className={isDesktopScreen ? "img-container" : "img-container inactive"} href={work.linkUrl} target="_blank" rel="noopener noreferrer">
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
            <div className="flex j-between">
                <div>
                    {work.tags.map(tag =>
                        <a key={utilService.makeId()} href={`//google.com/search?q=${tag}`} target="_blank" rel="noopener noreferrer">#{tag}</a>
                    )}
                </div>
                <button className="btn-visit d-none right"><a href={work.linkUrl}>Visit</a></button>
            </div>
        </div>
    </section>
}