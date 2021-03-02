import { Link } from "react-router-dom"

export const ContactCTA = () => {

    return <section className='contact-cta main-layout flex j-around a-center'>
        <strong>Got any questions for me?</strong>
        <p>Feel free to send me a message regarding anything and everything</p>
        <Link to="/contact"><button>Contact Me</button></Link>
    </section >
}