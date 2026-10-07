import { useState } from "react";
import { LuCheck, LuCopy, LuMoveUpRight } from "react-icons/lu";
import styles from "./styles.module.css";

const TypeSpecimen = ({ settings, pair }) => {
    const [copied, setCopied] = useState(false);
    const headingStyle = {
        fontFamily: pair.heading,
        fontSize: `clamp(42px, ${settings.headingSize / 13}vw, ${settings.headingSize}px)`,
        fontWeight: settings.weight,
        letterSpacing: `${settings.tracking / 100}em`,
    };
    const bodyStyle = {
        fontFamily: pair.body,
        fontSize: `${settings.bodySize}px`,
        lineHeight: settings.lineHeight,
    };
    const cssSnippet = `/* ${pair.name} pairing */\n.hero-title {\n  font-family: ${pair.heading};\n  font-size: ${settings.headingSize}px;\n  font-weight: ${settings.weight};\n  letter-spacing: ${settings.tracking / 100}em;\n}\n\n.body-copy {\n  font-family: ${pair.body};\n  font-size: ${settings.bodySize}px;\n  line-height: ${settings.lineHeight};\n}`;

    const copyCss = async () => {
        try {
            await navigator.clipboard.writeText(cssSnippet);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section className={styles.typeSpecimen} id="specimen" aria-labelledby="specimen-title">
            <div className={styles.sectionHeader}>
                <div>
                    <p className={styles.sectionLabel}>A closer look</p>
                    <h2 id="specimen-title">Your type, in context</h2>
                </div>
                <button className={styles.copyButton} type="button" onClick={copyCss}>
                    {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
                    {copied ? "Copied" : "Copy CSS"}
                </button>
            </div>

            <div className={styles.previewCard}>
                <div className={styles.previewMeta}>
                    <span>{pair.name} pairing</span>
                    <span>01 — 04</span>
                </div>
                <div className={styles.previewContent}>
                    <p className={styles.overline}>A note on making</p>
                    <h3 className={styles.previewHeading} style={headingStyle}>
                        {settings.headline || "Your headline goes here."}
                    </h3>
                    <div className={styles.previewBottom}>
                        <p className={styles.previewParagraph} style={bodyStyle}>
                            {settings.paragraph || "Your body copy will appear here."}
                        </p>
                        <a href="#scale" className={styles.readLink}>
                            Explore the scale <LuMoveUpRight aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className={styles.previewFooter}>
                    <span>LETTERFORM / TYPE SPECIMEN</span>
                    <span>READABLE BY DESIGN</span>
                </div>
            </div>
            <p className={styles.copyStatus} aria-live="polite">
                {copied ? "Typography CSS copied to clipboard." : ""}
            </p>
        </section>
    );
};

export default TypeSpecimen;
