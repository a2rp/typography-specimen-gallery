import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import styles from "./styles.module.css";

const ratios = [
    { value: 1.2, label: "Minor third", note: "Quiet and compact" },
    { value: 1.25, label: "Major third", note: "Balanced and familiar" },
    { value: 1.333, label: "Perfect fourth", note: "Confident contrast" },
];

const scaleLabels = ["Caption", "Small", "Body", "Subhead", "Title", "Display", "Hero", "Poster"];

const TypeScale = ({ settings, pair }) => {
    const [ratio, setRatio] = useState(1.25);
    const [copied, setCopied] = useState(false);
    const scale = scaleLabels.map((label, index) => ({
        label,
        size: Math.round(settings.bodySize * ratio ** (index - 2)),
    }));
    const scaleCss = `:root {\n${scale.map(({ label, size }) => `  --type-${label.toLowerCase()}: ${size}px;`).join("\n")}\n}`;

    const copyScale = async () => {
        try {
            await navigator.clipboard.writeText(scaleCss);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section className={styles.typeScale} id="scale" aria-labelledby="scale-title">
            <div className={styles.sectionHeading}>
                <div>
                    <p className={styles.sectionLabel}>Build a rhythm</p>
                    <h2 id="scale-title">A scale that holds together</h2>
                    <p className={styles.description}>Each step grows from your body size, so the hierarchy feels related.</p>
                </div>
                <button className={styles.copyButton} type="button" onClick={copyScale}>
                    {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
                    {copied ? "Copied" : "Copy scale CSS"}
                </button>
            </div>

            <div className={styles.scaleLayout}>
                <div className={styles.scaleTable}>
                    <div className={styles.tableHeader}>
                        <span>Style</span>
                        <span>Sample</span>
                        <span>Size</span>
                    </div>
                    {scale.map((item) => (
                        <div className={styles.scaleRow} key={item.label}>
                            <span className={styles.scaleName}>{item.label}</span>
                            <span
                                className={styles.scaleSample}
                                style={{ fontFamily: pair.heading, fontSize: `${Math.min(item.size, 58)}px` }}
                            >
                                Ag
                            </span>
                            <span className={styles.scaleSize}>{item.size}px</span>
                        </div>
                    ))}
                </div>

                <aside className={styles.scaleSettings} aria-label="Scale settings">
                    <div className={styles.glyphCard}>
                        <span className={styles.glyphLabel}>Selected pairing</span>
                        <span className={styles.glyphPair} style={{ fontFamily: pair.heading }}>Aa</span>
                        <p style={{ fontFamily: pair.body }}>{pair.name} / {settings.bodySize}px body</p>
                    </div>
                    <label className={styles.ratioField} htmlFor="scale-ratio">
                        Scale ratio
                        <select id="scale-ratio" value={ratio} onChange={(event) => setRatio(Number(event.target.value))}>
                            {ratios.map((item) => (
                                <option value={item.value} key={item.label}>{item.label} ({item.value})</option>
                            ))}
                        </select>
                    </label>
                    <p className={styles.ratioNote}>{ratios.find((item) => item.value === ratio)?.note}. Based on a {settings.bodySize}px body size.</p>
                    <div className={styles.characterSet} aria-label="Character sample">
                        <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                        <span>abcdefghijklmnopqrstuvwxyz</span>
                        <span>0123456789 &amp;?!@#%</span>
                    </div>
                </aside>
            </div>
            <p className={styles.copyStatus} aria-live="polite">{copied ? "Scale tokens copied to clipboard." : ""}</p>
        </section>
    );
};

export default TypeScale;
