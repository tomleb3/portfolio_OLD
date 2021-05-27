export const PersonalInfo = () => {

    const cloudinaryBaseUrl = process.env.REACT_APP_CLOUDINARY_BASE_URL

    return <article className="personal-info">
        <header className="flex a-center">
            <img src={`${cloudinaryBaseUrl}/contact_sh4xw1.png`} alt="Contact" />
            <label>Contact Info</label>
        </header>
        <main>
            <div className="flex a-center">
                <img src={`${cloudinaryBaseUrl}/name_uy8le0.png`} alt="Name" />
                <span>Tom Lebeodkin</span>
            </div>
            <div className="flex a-center">
                <img src={`${cloudinaryBaseUrl}/phone_ppyowc.png`} alt="Phone" />
                <span>+972 545323660</span>
            </div>
            <div className="flex a-center">
                <img src={`${cloudinaryBaseUrl}/email_sblmaz.png`} alt="Email" />
                <span>tomleb3@gmail.com</span>
            </div>
        </main>
    </article>
}