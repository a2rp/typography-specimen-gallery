import styles from "./App.module.css";
import SiteHeader from "./components/siteHeader/index.jsx";
import TypeControls from "./components/typeControls/index.jsx";
import TypeSpecimen from "./components/typeSpecimen/index.jsx";
import TypeScale from "./components/typeScale/index.jsx";
import { fontPairs } from "./data/fontPairs.js";
import { useState } from "react";

const initialSettings = {
    pairId: "editorial",
    headline: "Good type makes room for good ideas.",
    paragraph: "A thoughtful pairing gives every page a voice. Adjust a few details, then read the result as a whole.",
    weight: 400,
    headingSize: 68,
    bodySize: 17,
    lineHeight: 1.6,
    tracking: -4,
};

const App = () => {
    const [settings, setSettings] = useState(initialSettings);
    const handleSettingChange = (key, value) => {
        setSettings((current) => ({ ...current, [key]: value }));
    };

    return (
        <div className={styles.appShell}>
            <SiteHeader />
            <main className={styles.pageContent} id="top">
                <section className={styles.introduction}>
                    <div>
                        <h1>Find the voice in every letter.</h1>
                        <p>Pair typefaces, tune the details, and see the whole page take shape.</p>
                    </div>
                    <span className={styles.issueMark}>TYPE STUDY / 01</span>
                </section>
                <TypeControls
                    settings={settings}
                    pairs={fontPairs}
                    onChange={handleSettingChange}
                />
                <TypeSpecimen
                    settings={settings}
                    pair={fontPairs.find((pair) => pair.id === settings.pairId)}
                />
                <TypeScale
                    settings={settings}
                    pair={fontPairs.find((pair) => pair.id === settings.pairId)}
                />
            </main>
        </div>
    );
};

export default App;
