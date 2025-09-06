export const metadata = {
    title: 'Datenschutz',
    description: 'Informationen zum Datenschutz auf unserer Website.',
};
import styles from '@/css/privacy.module.css';

export default function DatenschutzPage() {
    return (
        <section className={styles.privacySection}>
            <h2>Datenschutzerklärung</h2>

            <h3>Verantwortlich</h3>
            <p>
                Uncropped Media <br />
                Teplitzer Str. 11 <br />
                01773 Altenberg <br />
                E-mail: post@uncropped.media
            </p>

            <h3>Allgemeines</h3>
            <p>
                Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Auf dieser Website werden <strong>keine Cookies</strong>, kein Tracking und keine Analyse-Tools eingesetzt.
            </p>

            <h3>Kontaktformular</h3>
            <p>
                Wenn du uns über das Kontaktformular schreibst, werden die folgenden Angaben von dir übermittelt:
            </p>
            <ul>
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Inhalt deiner Nachricht</li>
            </ul>
            <p>
                Die Verarbeitung dieser Daten erfolgt ausschließlich zum Zweck der Beantwortung deiner Anfrage.
            </p>

            <h4>Rechtsgrundlage</h4>
            <p>
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw. Vertragsdurchführung).
            </p>

            <h4>Übermittlung an Formspree</h4>
            <p>
                Das Formular wird über den Dienst <strong>Formspree</strong> (
                <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
                    https://formspree.io
                </a>
                ) bereitgestellt. Dabei werden die eingegebenen Daten an Formspree weitergeleitet und in unserem Postfach zugestellt.
                Formspree ist ein externer Dienstleister mit Sitz in den USA.
            </p>
            <p>
                Wir haben mit Formspree einen Vertrag zur Auftragsverarbeitung (Data Processing Agreement, DPA) geschlossen.
            </p>

            <h4>Speicherdauer</h4>
            <p>
                Die von dir übermittelten Daten werden nur so lange gespeichert, wie es für die Bearbeitung deiner Anfrage erforderlich ist.
            </p>

            <h3>Deine Rechte</h3>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul>
                <li>Auskunft über die bei uns gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung deiner Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
            </ul>
            <p>
                Hierzu genügt eine formlose Mitteilung an uns (siehe Kontaktdaten oben).
            </p>

            <h3>Beschwerderecht</h3>
            <p>
                Darüber hinaus hast du das Recht, dich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren, wenn du der Ansicht bist, dass deine Daten unrechtmäßig verarbeitet werden.
            </p>
        </section>
    );
}
