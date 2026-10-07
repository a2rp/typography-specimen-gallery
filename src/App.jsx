import styles from "./App.module.css";

const App = () => (
    <div className={styles.appShell}>
        <header className={styles.header}>
            <a className={styles.brand} href="#top">
                <span className={styles.brandMark} aria-hidden="true">Aa</span>
                <span>Letterform</span>
            </a>
            <a
                className={styles.repositoryLink}
                href="https://github.com/a2rp/typography-specimen-gallery"
                target="_blank"
                rel="noreferrer"
            >
                Repository
            </a>
        </header>
        <main className={styles.pageContent} id="top">
            <section className={styles.introduction}>
                <h1>Find the voice in every letter.</h1>
                <p>Pair typefaces, tune the details, and see the whole page take shape.</p>
            </section>
            <section className={styles.startPanel} aria-label="Typography workspace">
                <p>The specimen studio is ready for its first type pairing.</p>
            </section>
        </main>
    </div>
);

export default App;
