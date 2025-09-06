"use-client";
import Link from 'next/link';
import styles from '@/css/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} uncropped.media. Alle Rechte vorbehalten. <Link href="/impressum" className={styles.footerLink}>Impressum</Link> | <Link href="/datenschutz" className={styles.footerLink}>Datenschutz</Link>
        </footer>
    );
}
