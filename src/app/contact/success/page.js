import Link from "next/link";
import styles from "@/css/contact.module.css";

const metadata = {
    title: 'Nachricht erhalten',
    description: 'Vielen Dank für deine Nachricht. Wir melden uns in Kürze bei dir.',
};

export { metadata };

export default function SuccessPage() {
    return (
        <section className={styles.contactPage}>
            <div className={styles.contentSuccess}>
                <div className={styles.text}>
                    <h2>✅ Wir haben deine Nachricht erhalten</h2>
                    <p>
                        Vielen Dank für deine Anfrage – wir haben deine Nachricht erhalten und werden uns innerhalb von 24 Stunden bei dir melden.
                        Wenn deine Idee 🔥 ist, wahrscheinlich sogar früher.
                    </p>
                    <Link href="/" className={styles.cta}>
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </section>
    );
}