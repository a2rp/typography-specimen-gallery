import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { LuMenu, LuType, LuX } from "react-icons/lu";
import styles from "./styles.module.css";

const links = [
    { label: "Studio", href: "#studio" },
    { label: "Specimen", href: "#specimen" },
    { label: "Scale", href: "#scale" },
];

const SiteHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const closeOutside = (event) => {
            if (!headerRef.current?.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("pointerdown", closeOutside);
        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.removeEventListener("pointerdown", closeOutside);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.siteHeader} ref={headerRef}>
            <div className={styles.headerInner}>
                <a className={styles.brand} href="#top" onClick={closeMenu}>
                    <span className={styles.brandMark} aria-hidden="true">
                        <LuType />
                    </span>
                    <span>Letterform</span>
                </a>
                <nav
                    className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
                    id="main-navigation"
                    aria-label="Main navigation"
                >
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={closeMenu}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className={styles.actions}>
                    <a
                        className={styles.repositoryLink}
                        href="https://github.com/a2rp/typography-specimen-gallery"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub aria-hidden="true" />
                        <span>Repository</span>
                    </a>
                    <button
                        className={styles.menuButton}
                        type="button"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        aria-controls="main-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
