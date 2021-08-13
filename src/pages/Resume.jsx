import { useEffect } from "react"

export const Resume = () => {

    const pdfUrl = process.env.REACT_APP_RESUME_URL

    useEffect(() => {
        window.scrollTo({ top: 0 })
        document.title = 'Tom Leb \u2022 Resume'
    }, [])

    return <section className="resume-page main-layout m-page flex">
        <iframe title="Resume" src={pdfUrl}></iframe>
    </section>
}