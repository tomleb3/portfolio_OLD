import React from 'react';

export const Resume = () => {
    const pdfUrl = process.env.REACT_APP_RESUME_URL;

    return (
        <section className='resume-page main-layout m-page flex'>
            <iframe title='Resume' src={pdfUrl}></iframe>
        </section>
    );
};
