import React, { useState } from 'react';
import { strings } from './strings.js';
import './style.css';

function App() {
    const getBrowserLang = () => {
        const lang = navigator.language.slice(0, 2);
        return Object.keys(strings).includes(lang) ? lang : 'en';
    };

    const [lang, setLang] = useState(getBrowserLang());
    const t = strings[lang];

    return (
        <>
            <div className="lang-switcher">
                {Object.keys(strings).map((l) => (
                    <button key={l} onClick={() => setLang(l)} title={l.toUpperCase()}>
                        <img src={`/flags/${l}.png`} alt={l} className="flag" />
                    </button>
                ))}
            </div>

            <div className="container">
                <div className="header">
                    <div className="title">
                        <h1>{t.title}</h1>
                        <p><em>{t.subtitle}</em></p>
                    </div>
                    <div className="profile-image-wrapper">
                        <img src="/profile.png" alt="Kathi" className="profile-image" />
                    </div>
                </div>

                <section>
                    <h2>{t.personal.title}</h2>
                    <p>{t.personal.name}</p>
                    <p>{t.personal.birth}</p>
                    <p>{t.personal.role}</p>
                    <p>{t.personal.employer}</p>
                    <p>{t.personal.model}</p>
                    <p>{t.personal.availability}</p>
                </section>

                <section>
                    <h2>{t.experience.title}</h2>
                    <p>{t.experience.role}</p>
                    <ul>{t.experience.tasks.map((task, i) => <li key={i}>{task}</li>)}</ul>
                </section>

                <section>
                    <h2>{t.skills.title}</h2>
                    <ul>{t.skills.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </section>

                <section>
                    <h2>{t.languages.title}</h2>
                    <ul>{t.languages.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </section>

                <section>
                    <h2>{t.education.title}</h2>
                    <ul>{t.education.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </section>

                <section>
                    <h2>{t.tech.title}</h2>
                    <ul>{t.tech.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </section>

                <section>
                    <h2>{t.strengths.title}</h2>
                    <ul>{t.strengths.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </section>

                <section>
                    <h2>{t.objective.title}</h2>
                    <p>{t.objective.text}</p>
                </section>
            </div>
        </>
    );
}

export default App;
