import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Himadri Karan",
  description: "Portfolio of Himadri Karan, CSE student.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f7f9] text-[#0e1116] font-(--font-space-grotesk) bg-[radial-gradient(800px_600px_at_10%_0%,rgba(14,17,22,0.06),transparent_60%),radial-gradient(700px_500px_at_90%_10%,rgba(14,17,22,0.05),transparent_60%)]">
        {children}
      </body>
    </html>
  );
}
