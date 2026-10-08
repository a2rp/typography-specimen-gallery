import styles from "./styles.module.css";

const TypeControls = ({ settings, pairs, onChange }) => (
    <section
        className={styles.typeControls}
        id="studio"
        aria-labelledby="controls-title"
    >
        <div className={styles.panelHeading}>
            <div>
                <h2 id="controls-title">Set the type</h2>
                <p>Choose a pairing, then tune the specimen.</p>
            </div>
            <span className={styles.controlCount}>01 / 04</span>
        </div>

        <div className={styles.controlGrid}>
            <label className={styles.field} htmlFor="font-pair">
                Typeface pair
                <select
                    id="font-pair"
                    value={settings.pairId}
                    onChange={(event) => onChange("pairId", event.target.value)}
                >
                    {pairs.map((pair) => (
                        <option value={pair.id} key={pair.id}>
                            {pair.name} - {pair.note}
                        </option>
                    ))}
                </select>
            </label>

            <label className={styles.field} htmlFor="sample-title">
                Headline
                <input
                    id="sample-title"
                    type="text"
                    maxLength={80}
                    value={settings.headline}
                    onChange={(event) =>
                        onChange("headline", event.target.value)
                    }
                />
            </label>

            <label
                className={`${styles.field} ${styles.paragraphField}`}
                htmlFor="sample-paragraph"
            >
                Body copy
                <textarea
                    id="sample-paragraph"
                    rows="2"
                    maxLength={240}
                    value={settings.paragraph}
                    onChange={(event) =>
                        onChange("paragraph", event.target.value)
                    }
                />
            </label>

            <label className={styles.field} htmlFor="heading-weight">
                Heading weight
                <select
                    id="heading-weight"
                    value={settings.weight}
                    onChange={(event) =>
                        onChange("weight", Number(event.target.value))
                    }
                >
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semibold</option>
                    <option value="700">Bold</option>
                    <option value="800">Extra bold</option>
                </select>
            </label>

            <label className={styles.rangeField} htmlFor="heading-size">
                <span>
                    Heading size{" "}
                    <output htmlFor="heading-size">
                        {settings.headingSize} px
                    </output>
                </span>
                <input
                    id="heading-size"
                    type="range"
                    min="36"
                    max="96"
                    step="1"
                    value={settings.headingSize}
                    onChange={(event) =>
                        onChange("headingSize", Number(event.target.value))
                    }
                />
            </label>

            <label className={styles.rangeField} htmlFor="body-size">
                <span>
                    Body size{" "}
                    <output htmlFor="body-size">{settings.bodySize} px</output>
                </span>
                <input
                    id="body-size"
                    type="range"
                    min="14"
                    max="24"
                    step="1"
                    value={settings.bodySize}
                    onChange={(event) =>
                        onChange("bodySize", Number(event.target.value))
                    }
                />
            </label>

            <label className={styles.rangeField} htmlFor="line-height">
                <span>
                    Line height{" "}
                    <output htmlFor="line-height">
                        {settings.lineHeight.toFixed(1)}
                    </output>
                </span>
                <input
                    id="line-height"
                    type="range"
                    min="1.2"
                    max="2"
                    step="0.1"
                    value={settings.lineHeight}
                    onChange={(event) =>
                        onChange("lineHeight", Number(event.target.value))
                    }
                />
            </label>

            <label className={styles.rangeField} htmlFor="letter-spacing">
                <span>
                    Letter spacing{" "}
                    <output htmlFor="letter-spacing">
                        {(settings.tracking / 100).toFixed(2)} em
                    </output>
                </span>
                <input
                    id="letter-spacing"
                    type="range"
                    min="-8"
                    max="12"
                    step="1"
                    value={settings.tracking}
                    onChange={(event) =>
                        onChange("tracking", Number(event.target.value))
                    }
                />
            </label>
        </div>
    </section>
);

export default TypeControls;
