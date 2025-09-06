export const metadata = {
    title: 'Aktuelles',
    description: 'Neuigkeiten und Updates aus unseren Projekten.',
};

import styles from '@/css/news.module.css';
import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
    {
        description: "Unser neuestes Projekt \"Nollendorf - Im Schatten der Geschichte, im Licht der Natur\" ist jetzt auf YouTube verfügbar! Tauchen Sie ein in die faszinierende Geschichte und atemberaubende Natur dieser einzigartigen Region.",
        date: "2025-07-22",
        link: "https://www.youtube.com/watch?v=rJJgTz00zIQ",
        image: "/maxresdefault.webp"
    },
    {
        description: "Doku Veľká Fatra - Naturjuwel in der Slowakei: Die Arbeiten zu diesem Film haben fast ein Jahr in Anspruch genommen. Von der Recherche, über die Planung, Dreharbeiten vor Ort und die Postproduktion. Die Veľká Fatra bietet einen Artenreichtum in Flora und Fauna, der in Europa seinesgleichen sucht...",
        date: "2024-09-10",
        link: "https://www.youtube.com/watch?v=YFyMdfWyGRs",
        image: "/maxresdefault.jpg"
    },
    {
        description: "Stolzer Gewinner der Medaille 'UNION INTERNATIONALE DU CINEMA' (UNICA) mit Diplom auf dem internationalen Filmfestival 'Tatranský Kamzík 2023' in der Slowakei für unseren Film 'Pol'ana'!",
        date: "2023-11-26",
        link: "https://www.instagram.com/p/C0HyZMatiMX/?img_index=1",
        image: "/403987537_1300312444697074_2503370548261994475_n.jpg"
    },
    {
        description: "UCM wird ab sofort auf Instagram vertreten sein. Hier werden wir regelmäßig Updates zu unseren Projekten, Einblicke hinter die Kulissen und vieles mehr teilen. Folgt uns, um nichts zu verpassen!",
        date: "2023-08-11",
        link: "https://www.instagram.com/p/CvztlKdoolo/",
        image: "/366415063_1456836431804785_6827924925741697293_n.jpg"
    }
];

export default function NewsPage() {
    return (
        <section className={styles.newsSection}>
            <div className={styles.text}>
                <h2 className={styles.newsTitle}>Neuigkeiten</h2>
            </div>
            <div className={styles.newsGrid}>
                {newsItems.map((item, index) => (
                    <Link href={item.link} key={index} className={styles.newsCard}>
                        <Image width={500} height={300} src={item.image} alt={`News ${index + 1}`} className={styles.newsThumbnail} />
                        <div className={styles.newsText}>
                            <p className={styles.newsItemDescription}>{item.description}</p>
                            <p className={styles.newsItemDate}>{new Date(item.date).toLocaleDateString('de-DE', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}