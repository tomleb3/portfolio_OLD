import { useEffect, useState } from "react"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const [msgFields, setMsgFields] = useState({
        senderName: '',
        senderEmail: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { senderName, senderEmail, message } = msgFields

    useEffect(() => {
        window.scrollTo({ top: 0 })
        document.title = 'Tom Leb \u2022 Contact'
    }, [])

    const clearMsgFields = () => {
        setMsgFields({
            senderName: '',
            senderEmail: '',
            message: ''
        })
    }

    const handleChange = ev => {
        setMsgFields({
            ...msgFields,
            [ev.target.name]: ev.target.value
        })
    }

    const onSubmitForm = async ev => {
        const {
            REACT_APP_EMAILJS_SERVICEID,
            REACT_APP_EMAILJS_TEMPLATEID,
            REACT_APP_EMAILJS_USERID
        } = process.env
        ev.preventDefault()
        setIsSubmitting(true)
        try {
            await emailjs.sendForm(REACT_APP_EMAILJS_SERVICEID,
                REACT_APP_EMAILJS_TEMPLATEID,
                ev.target,
                REACT_APP_EMAILJS_USERID)
            clearMsgFields()
            toast.success("Message sent", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                rtl: false,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
            })
        }
        catch (err) {
            console.log(err.text)
            toast.error("Please try again", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                rtl: false,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
            })
        }
        setIsSubmitting(false)
    }

    return <form className="contact-page main-layout" method="POST" onSubmit={onSubmitForm}>
        <p>Thanks for taking the time to reach out.</p>

        <div className="flex wrap j-between">
            <div>
                <label htmlFor="senderName">Name</label>
                <input type="text" name="senderName" value={senderName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="senderEmail">Email</label>
                <input type="email" name="senderEmail" value={senderEmail} onChange={handleChange} />
            </div>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} onChange={handleChange} />
        </div>
        <button className={isSubmitting ? 'btn-submit submitting' : 'btn-submit'} type="submit">Submit</button>
        <ToastContainer />
    </form>
}