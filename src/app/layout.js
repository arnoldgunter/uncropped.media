import "./globals.css";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer";
import Socials from "@/components/socials";

export const metadata = {
  title: "uncropped.media",
  description: "Portraitfilme, Naturdokus, Musikvideos und mehr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navigation />
        {children}
        <Footer />
        <Socials />
      </body>
    </html>
  );
}
