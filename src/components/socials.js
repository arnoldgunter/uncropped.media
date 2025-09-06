import Link from "next/link";
import { Youtube, Instagram, Mail } from "lucide-react";

export default function Socials() {
    return (
        <div style={{ position: "fixed", bottom: "20px", right: "0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", paddingTop: "10px", zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.5)", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
            <Link href="https://www.youtube.com/@ucm-naturundlandschaft/videos" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <Youtube style={{ color: "var(--color-accent)", width: "30px", height: "30px" }} />
            </Link>
            <Link href="https://www.instagram.com/uncropped.media/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <Instagram style={{ color: "var(--color-accent)", width: "30px", height: "30px" }} />
            </Link>
            <Link href="/contact" style={{ margin: "0 10px" }}>
                <Mail style={{ color: "var(--color-accent)", width: "30px", height: "30px" }} />
            </Link>
        </div>
    );
}
