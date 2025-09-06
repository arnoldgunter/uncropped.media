import styles from '@/css/projects.module.css';
import Link from 'next/link';

const metadata = {
    title: 'Projekte',
    description: 'Eine Übersicht unserer Projekte und Arbeiten.',
};

export { metadata };

const projects = [
    {
        "title": "Nollendorf-Im Schatten der Geschichte, im Licht der Natur/ Nakléřov-V tieni dejín, vo svetle prírody",
        "link": "https://www.youtube.com/watch?v=rJJgTz00zIQ&t=1s",
        "thumbnail": "https://i.ytimg.com/vi/rJJgTz00zIQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLcW-n5q77JTy_q0aFqpwHBmWHEQ",
        "type": "video"
    },
    {
        "title": "Doku Veľká Fatra - Naturjuwel in der Slowakei (slovenske titulki)",
        "link": "https://www.youtube.com/watch?v=YFyMdfWyGRs&t=81s",
        "thumbnail": "https://i.ytimg.com/vi/YFyMdfWyGRs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoAarF2SxRPAxy1gqMc6gmKB0E0w",
        "type": "video"
    },
    {
        "title": "Die Teufelskralle - Kurzportrait - (Neue Filmreihe von UCM) - (Čertov pazúr - slovensky titulkami!)",
        "link": "https://www.youtube.com/watch?v=ERekWF_WIKU&t=1s",
        "thumbnail": "https://i.ytimg.com/vi/ERekWF_WIKU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6GB5kZ8DJllGxEapRWIrM68PocQ",
        "type": "video"
    },
    {
        "title": "Preisverleihung auf Internationalem Filmfest \"Tatranský Kamzík\" Liptovsky Jan (slovensky titulkami!)",
        "link": "https://www.youtube.com/watch?v=4-cldbziWdY",
        "thumbnail": "https://i.ytimg.com/vi/4-cldbziWdY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbj6VG9jZbBYd9ds6EmdB3Zi394Q",
        "type": "video"
    },
    {
        "title": "Pol'ana: Unbekannte Wildnis im Herzen der Slowakei (Neznáma divočina v srdci Slovenska)",
        "link": "https://www.youtube.com/watch?v=KtLcoo9g4ig&t=55s",
        "thumbnail": "https://i.ytimg.com/vi/KtLcoo9g4ig/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPzueX8cdWrC0oKba-jc3D1T6Vcg",
        "type": "video"
    },
    {
        "title": "Hron 3.Teil - Natur- und Vogelparadies \"Donauniederung - Podunajská nížina\" - Flußwanderung Slowakei",
        "link": "https://www.youtube.com/watch?v=IRkpZFXS5EY",
        "thumbnail": "https://i.ytimg.com/vi/IRkpZFXS5EY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBW_DILNHqDdTnnCjv40soYTmkxw",
        "type": "video"
    },
    {
        "title": "Der Hron - Teil 2: Pohronie - Eine Flußlandschaft in der Slowakei - so slovenskými titulkami",
        "link": "https://www.youtube.com/watch?v=8854zNlMqlM&t=1s",
        "thumbnail": "https://i.ytimg.com/vi/8854zNlMqlM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOmtXF8tn0uR9pP0M-EfhwoFJAfQ",
        "type": "video"
    },
    {
        "title": "Der Hron - Eine Flußlandschaft in der Slowakei - Von der Quelle zur Mündung - Teil 1 - Horehronie",
        "link": "https://www.youtube.com/watch?v=wMRo2K1IV2I&t=7s&pp=0gcJCcYJAYcqIYzv",
        "thumbnail": "https://i.ytimg.com/vi/wMRo2K1IV2I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrJ7Bqp6n9H2AV5kP27E2oY3nWpg",
        "type": "video"
    },
    {
        "title": "Muránska Planina - Herbstwanderung (Jesenná túra) - Slowakei - Karpaten - (so slovenskými titulkami)",
        "link": "https://www.youtube.com/watch?v=HrdLx_SWI9U",
        "thumbnail": "https://i.ytimg.com/vi/HrdLx_SWI9U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6dve9hwYI5wiYY24ebzfjcHh3Aw",
        "type": "video"
    },
    {
        "title": "Nationalpark Poloniny - Die letzten Urwälder Europas - Slowakei Karpaten (so slovenskými titulkami)",
        "link": "https://www.youtube.com/watch?v=eelILx150Q4&t=966s",
        "thumbnail": "https://i.ytimg.com/vi/eelILx150Q4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCc4fNVpSu17n23cDblRymSA8Kt9A",
        "type": "video"
    },
    {
        "title": "Kraniche und Schwarzstörche im Erzgebirge - Eine Frühlingswanderung - Wildvögel / Zugvögel",
        "link": "https://www.youtube.com/watch?v=aj0HrxdTBUI&t=2s",
        "thumbnail": "https://i.ytimg.com/vi/aj0HrxdTBUI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDA4boSptMOYpdoZHQlJJ2c0F2r6A",
        "type": "video"
    },
    {
        "title": "Wird es Frühling? Heimische Vögel - Erzgebirge Buntspecht Rotkehlchen Amsel Buchfink Heckenbraunelle",
        "link": "https://www.youtube.com/watch?v=M8X_Fb7Vnak",
        "thumbnail": "https://i.ytimg.com/vi/M8X_Fb7Vnak/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaTAN-eu9CxbSjwq4VPKkC6tDW0g",
        "type": "video"
    },
    {
        "title": "Wintertraum im Erzgebirge - cinematic colours and lights - GH5s 400Mbit intern",
        "link": "https://www.youtube.com/watch?v=akuC4QHTMP0",
        "thumbnail": "https://i.ytimg.com/vi/akuC4QHTMP0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWavkn66Xa2kDCxmmnXtuxooKZlQ",
        "type": "video"
    },
    {
        "title": "Naturparadies Muránska planina - Karpaten - Wilde Pferde, Reiten, Ziesel, Schafe -Slowakei/Slovensko",
        "link": "https://www.youtube.com/watch?v=oO81Gjqlq-Y",
        "thumbnail": "https://i.ytimg.com/vi/oO81Gjqlq-Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn7HgXSxmXs2nKcnvj9srt4j0Muw",
        "type": "video"
    },
    {
        "title": "HORÚCA NOVINKA V ŠUMIACI - MAŠKRTKY OD KATKY - ŠUMIAC Horehronie",
        "link": "https://www.youtube.com/watch?v=223Nya-7yJA",
        "thumbnail": "https://i.ytimg.com/vi/223Nya-7yJA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAo8yVTZ0H017U-fARSXF9HpnK2AA",
        "type": "video"
    },
    {
        "title": "Wild- und Singvögel im Garten / Handaufzucht Buchfink / Balz / Vogelhochzeit / Dokumentation 4K",
        "link": "https://www.youtube.com/watch?v=J4ruRZQ568Y&t=3s",
        "thumbnail": "https://i.ytimg.com/vi/J4ruRZQ568Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxKUXbjrbuelsFjDERHvEAxxqRhg",
        "type": "video"
    },
    {
        "title": "\"Zimné kúzlo - Winterzauber\" - Muránska Planina + Horehronie, Šumiac a okolie Slowakei / Karpaten",
        "link": "https://www.youtube.com/watch?v=_VWW0in1lbU",
        "thumbnail": "https://i.ytimg.com/vi/_VWW0in1lbU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXQDAFg2_2KdAvnr_pUMEgm0mRGg",
        "type": "video"
    },
    {
        "title": "\"Jesenné dojmy - Herbstimpressionen\" - Muránska Planina + Horehronie - Slowakei/Slovakia/Slovensko",
        "link": "https://www.youtube.com/watch?v=FrN-EmBnEiM&t=1s",
        "thumbnail": "https://i.ytimg.com/vi/FrN-EmBnEiM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7SJ3zgTn_1enbKC-kV-q3c9jSrw",
        "type": "video"
    },
    {
        "title": "Mala Fatra / Terchova / Janošikove diery / Karpaten / Slowakei/Slovakia/Slovensko",
        "link": "https://www.youtube.com/watch?v=KMKePxfyVYU&t=1695s",
        "thumbnail": "https://i.ytimg.com/vi/KMKePxfyVYU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsjnpP5oHfxkfdigIlVQKprQ180g",
        "type": "video"
    }
];

export default function ProjectsPage() {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.text}>
                <h2 className={styles.projectsTitle}>Unsere Projekte</h2>
            </div>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                        <img src={project.thumbnail} alt={project.title} className={styles.projectThumbnail} />
                        <p className={styles.projectTitle}>{project.title}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
