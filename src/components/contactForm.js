"use client";

import styles from "@/css/contactForm.module.css";

export default function ContactForm() {
    return (
        <form
            action="https://formsubmit.co/9da4e4413b9430744ffe9ed7fca6e9f4"
            method="POST"
            className={styles.contactForm}
        >
            <input
                type="text"
                name="name"
                placeholder="Dein Name"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Deine E-Mail"
                required
            />

            <textarea
                name="project"
                placeholder="Erzähl uns von deinem Projekt..."
                rows="6"
                required
            />

            <button type="submit">🚀 Anfrage senden</button>

            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_subject" value="Neue Projektanfrage von Website uncropped.media" />
            <input type="hidden" name="_next" value="https://uncropped.media/contact/success" />
        </form>
    );
}