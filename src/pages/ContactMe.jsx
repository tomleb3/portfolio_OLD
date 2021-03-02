import { useEffect, useState } from "react"
import emailjs from 'emailjs-com'

export const ContactMe = () => {

    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

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
        }
    }

    const onSubmitForm = async ev => {
        ev.preventDefault();
        try {
            const res = await emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                ev.target,
                process.env.REACT_APP_EMAILJS_USERID)
            console.log(res.text);
        }
        catch (err) {
            console.log(err.text);
        }
    }

    return <form className="contact-me main-layout" method="POST" onSubmit={onSubmitForm}>
        <p>Thanks for taking the time to reach out.
           How can I help you today?</p>

        <div className="flex wrap j-between">
            <div>
                <label htmlFor="senderName">Name</label>
                <input type="text" name="senderName" value={senderName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="senderEmail">Email</label>
                <input type="text" name="senderEmail" value={senderEmail} onChange={handleChange} />
            </div>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
    </form>
}