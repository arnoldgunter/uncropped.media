import ContactForm from "@/components/contactForm";
import styles from "@/css/contact.module.css";

const metadata = {
    title: 'Kontakt',
    description: 'Nehmen Sie Kontakt mit uns auf, um Ihr Projekt zu besprechen.',
};

export { metadata };

export default function ContactPage() {
    return (
        <section className={styles.contactPage}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>👋 Lass uns dein Projekt verwirklichen</h2>
                    <p>
                        Sie benötigen ein Firmenporträt, ein Musikvideo, eine Website oder einen Imagefilm? Wir helfen Ihnen gerne weiter.
                    </p>
                    <p>
                        Füllen Sie das Formular aus und erzählen Sie uns von Ihrem Projekt. Wir antworten schnell - normalerweise innerhalb von 24 Stunden.
                    </p>
                </div>

                <div className={styles.formContainer}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}