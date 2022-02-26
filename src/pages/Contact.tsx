import React, { useState } from 'react';

import { PersonalInfo } from '../cmps/PersonalInfo';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme, useUserSettings } from '../services/userSettingsService';

interface MessageFields {
  senderName: string | null;
  senderEmail: string | null;
  message: string | null;
}

const blankMessageFields: MessageFields = {
  senderName: null,
  senderEmail: null,
  message: null,
};

const toastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  rtl: false,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
};

export const Contact = () => {
  const { theme } = useUserSettings();
  const isDarkMode: boolean = theme === Theme.Dark;

  const [messageFields, setMessageFields] = useState<MessageFields>(blankMessageFields);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  //   document.title = 'Tom Leb \u2022 Contact';
  // }, []);

  const clearMsgFields = () => setMessageFields(blankMessageFields);

  // TODO: find right type.
  const handleChange = (ev: any) => {
    setMessageFields({
      ...messageFields,
      [ev.target.name]: ev.target.value,
    });
  };

  // TODO: find right type.
  const onSubmitForm = async (ev: any) => {
    ev.preventDefault();
    const { REACT_APP_EMAILJS_SERVICEID, REACT_APP_EMAILJS_TEMPLATEID, REACT_APP_EMAILJS_USERID } =
      process.env;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        REACT_APP_EMAILJS_SERVICEID ?? '',
        REACT_APP_EMAILJS_TEMPLATEID ?? '',
        ev.target,
        REACT_APP_EMAILJS_USERID ?? '',
      );
      toast.success('Message sent', toastOptions);
      clearMsgFields();
    } catch (err: any) {
      console.error(err.text);
      toast.error('Please try again', toastOptions);
    }
    setIsSubmitting(false);
  };

  return (
    <form
      method='POST'
      onSubmit={onSubmitForm}
      className={['contact-page', 'main-layout', isDarkMode ? 'dark-mode' : ''].join(' ')}
    >
      <p>Thanks for taking the time to reach out.</p>
      <div className='flex wrap j-between'>
        <div>
          <label htmlFor='senderName'>Name</label>
          <input
            type='text'
            name='senderName'
            value={messageFields.senderName ?? ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='senderEmail'>Email</label>
          <input
            type='email'
            name='senderEmail'
            value={messageFields.senderEmail ?? ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea name='message' value={messageFields.message ?? ''} onChange={handleChange} />
      </div>
      <button className={['btn-submit', isSubmitting ? 'submitting' : ''].join(' ')} type='submit'>
        Submit
      </button>
      <ToastContainer />
      <PersonalInfo />
    </form>
  );
};
