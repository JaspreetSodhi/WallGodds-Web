import React, { useState } from "react";
import Footer from "../CommonModule/FooterModule/Footer";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import Styles from "./Profile.module.css";

// Professional SVG Icons
const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const InstaIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


const Profile = () => {
    const [socials, setSocials] = useState({
        x: "",
        instagram: "",
        portfolio: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocials((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <div className={Styles.navbarWrapper}>
                <NavBar />
            </div>

            <div className={Styles.container}>
                {/* Main Card */}
                <div className={Styles.temp}>
                    <div className={Styles.closeBtn}></div>

                    <div className={Styles.contentGrid}>
                        {/* LEFT COLUMN */}
                        <div className={Styles.leftCol}>
                            {/* Profile Pic overlapping top */}
                            <div className={`${Styles.wireframeBox} ${Styles.profilePic}`}></div>
                            
                            {/* Socials Box - Vertical Layout (Corrected) */}
                            <div className={Styles.socialsBox}>
                                <div className={Styles.socialRow}>
                                    <div className={Styles.iconWrapper}>
                                        <XIcon />
                                    </div>
                                    <div className={Styles.inputPill}>
                                        <input
                                            type="text"
                                            name="x"
                                            value={socials.x}
                                            onChange={handleInputChange}
                                            placeholder="Add X"
                                            className={Styles.socialInput}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className={Styles.socialRow}>
                                    <div className={Styles.iconWrapper}>
                                        <InstaIcon />
                                    </div>
                                    <div className={Styles.inputPill}>
                                        <input
                                            type="text"
                                            name="instagram"
                                            value={socials.instagram}
                                            onChange={handleInputChange}
                                            placeholder="Add Instagram"
                                            className={Styles.socialInput}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div className={Styles.socialRow}>
                                    <div className={Styles.iconWrapper}>
                                        <img src="/socialLinks/ion_earth-sharp.png" />
                                    </div>
                                    <div className={Styles.inputPill}>
                                        <input
                                            type="text"
                                            name="portfolio"
                                            value={socials.portfolio}
                                            onChange={handleInputChange}
                                            placeholder="Add portfolio"
                                            className={Styles.socialInput}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className={Styles.rightCol}>
                            <div className={`${Styles.wireframeBox} ${Styles.banner}`}></div>
                            
<div className={Styles.bioBox}>
    <textarea
        name="bio"
        value={socials.bio}
        onChange={handleInputChange}
        placeholder="Add your bio here"
        spellCheck="false"
    />
</div>
                            
                            <div className={Styles.badgesSection}>
                                <h3 className={Styles.sectionTitle}>Your Badges</h3>
                                <div className={Styles.badgesList}>
                                    <div className={Styles.badgeCircle}></div>
                                    <div className={Styles.badgeCircle}></div>
                                    <div className={Styles.badgeCircle}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Your Walls Section */}
                <div className={Styles.wallsWrapper}>
                    <h3 className={Styles.wallsTitle}>Your Walls</h3>
                    <div className={Styles.wallsEmptyState}>
                        <p className={Styles.emptyTitle}>This space is waiting to be personalized</p>
                        <p className={Styles.emptySubtitle}>Upload your favorite wallpapers and bring it to life</p>
                    </div>
                </div>

                <div className={Styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Profile;