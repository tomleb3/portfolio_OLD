import { useEffect, useState } from "react"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    const clearFields = () => {
        setSenderName('')
        setSenderEmail('')
        setMessage('')
    }

    const handleChange = ev => {
        switch (ev.target.name) {
            case 'senderName':
                setSenderName(ev.target.value)
                break
            case 'senderEmail':
                setSenderEmail(ev.target.value)
                break
            case 'message':
                setMessage(ev.target.value)
                break
            default: return
        }
    }

    const onSubmitForm = async ev => {
        ev.preventDefault();
        setIsSubmitting(true)
        try {
            const res = await emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                ev.target,
                process.env.REACT_APP_EMAILJS_USERID)
            console.log(res)
            clearFields()
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
        <p>Thanks for taking the time to reach out.
           How can I help you today?</p>

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