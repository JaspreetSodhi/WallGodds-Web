import Styles from "./Footer.module.css";

export const Footer = () => {
    // Social Links
    const socialLinks = [
        {name: "Email", url: "mailto:wallgodds@gmail.com", path: '/socialLinks/Mail.svg'},
        {name: "GitHub", url: "https://github.com/WallGodds", path: '/socialLinks/GitHub.svg'},
        {name: "LinkedIn", url: "https://www.linkedin.com/company/wallgodds", path: '/socialLinks/LinkedIn.svg'},
        {name: "Discord", url: "https://discord.gg/kTQ5KWANp8", path: '/socialLinks/Discord.svg'},
    ];

    return (
        <footer className={Styles.footer}>
            {/* Left section */}
            <div className={Styles.left}>
                <img src="/Footer_title.svg" alt="WallGodds Footer Title" className={Styles.footerTitle} />
            </div>

            {/* Right section */}
            <div className={Styles.socials}>
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} title={`WallGodds's ${link.name}`} target="_blank" aria-label={link.name} rel="noopener noreferrer" className={Styles.iconBtn}>
                        <img src={link.path} alt={link.name} className={Styles.iconImage}/>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
