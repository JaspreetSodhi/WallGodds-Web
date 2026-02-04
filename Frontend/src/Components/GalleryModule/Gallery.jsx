import Styles from "./Gallery.module.css";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import Footer from "../CommonModule/FooterModule/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import MobileIcon from "./GallaryAssets/mobile.svg";
import TabletIcon from "./GallaryAssets/tablet.svg";
import LaptopIcon from "./GallaryAssets/laptop.svg";


const devices = [
    { id: "tablet", icon: TabletIcon, route: "/gallery/tablet" },
    { id: "desktop", icon: LaptopIcon, route: "/gallery/desktop" },
    { id: "mobile", icon: MobileIcon, route: "/gallery/mobile" },
];

import { useState } from "react";

import { useEffect } from "react";

const Gallery = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const activeDevice = location.pathname.split("/").pop();

    useEffect(() => {
        if (location.pathname === "/gallery" || location.pathname === "/gallery/") {
            navigate("/gallery/desktop", { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <>
            <div className={Styles.navbarWrapper}>
                <NavBar />
            </div>

            <div className={Styles.container}>
                {/* Device Selector */}
                <div className={Styles.deviceSelector}>
                    {devices.map(({ id, icon: Icon, route }) => {
                        const isActive = activeDevice === id;
                        const isAnyActive = devices.some(d => d.id === activeDevice);
                        const shouldBlur = isAnyActive && !isActive;

                        return (
                            <button
                                key={id}
                                onClick={() => navigate(route)}
                                className={`${Styles.deviceBtn} ${isActive ? Styles.active : ""} ${shouldBlur ? Styles.blurred : ""}`}
                            >
                                <img src={Icon} alt={id} width={34} height={34} />
                            </button>
                        );
                    })}
                </div>

                <div className={Styles.temp}>
                    <p className={Styles.first}>
                        <span className={Styles.desktopText}>
                            This section is being designed and will be available
                            for contributors soon
                        </span>
                        <span className={Styles.mobileText}>
                            This site is currently not responsive on mobile
                            devices
                        </span>
                    </p>
                    <p className={Styles.second}>
                        <span className={Styles.desktopText}>
                            Keep an eye on{" "}
                            <a
                                href="https://github.com/WallGodds/WallGodds-Web/issues"
                                target="_blank"
                                rel="noopener noreferrer">
                                Github
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://discord.gg/kTQ5KWANp8"
                                target="_blank"
                                rel="noopener noreferrer">
                                Discord
                            </a>{" "}
                            for updates and announcements
                        </span>
                        <span className={Styles.mobileText}>
                            Contributors can expect mobile responsiveness issues
                            to be available by the second week of February
                        </span>
                    </p>
                </div>

                <div className={Styles.footerWrapper}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Gallery;
