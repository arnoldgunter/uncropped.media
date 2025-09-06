import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Camera, TreePine, Music, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.heroText}>
          <h3>Willkommen bei</h3>
          <h1 className={styles.accentText}>uncropped.media</h1>
          <p>Portraitfilme, Naturdokus, Musikvideos und mehr...</p>
          <div className={styles.buttonContainer}>
            <Link href="/projects" className={styles.ctaButton}>
              Zu unseren Projekten
            </Link>
            <Link href="/contact" className={styles.contactButton}>
              Kontaktiere uns
            </Link>
          </div>
        </div>
        <Image
          className={styles.heroImage}
          src="/camera.avif"
          alt="camera"
          width={1400}
          height={1400}
          priority
        />
      </main>
      <section className={styles.servicesSection}>
        <h2>Das machen wir!</h2>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <Camera style={{ color: "var(--color-accent)", width: "80px", height: "80px" }} />
            <h3>Portraitfilme</h3>
            <p>
              Ihre Firma, Ihr Verein von der besten Seite in Bild und Ton. Mehr als nur ein Imagefilm!
            </p>
          </div>
          <div className={styles.serviceCard}>
            <TreePine style={{ color: "var(--color-accent)", width: "80px", height: "80px" }} />
            <h3>Naturdokus</h3>
            <p>
              Die Natur in ihrer Schönheit und Ursprünglichkeit. Festgehalten für die Zukunft.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Music style={{ color: "var(--color-accent)", width: "80px", height: "80px" }} />
            <h3>Musikvideos</h3>
            <p>
              Ihr musikalisches Projekt in Szene gesetzt.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <Globe style={{ color: "var(--color-accent)", width: "80px", height: "80px" }} />
            <h3>Websites</h3>
            <p>
              Ihre Präsenz im Internet. Modern, schnell und zuverlässig.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.contactSection}>
        <h2>Ihre Geschichte verdient mehr als nur einen Film!</h2>
        <h3>
          Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
        </h3>
        <Link href="/contact" className={styles.ctaButton}>
          Jetzt Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
