import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar";
import MusicPlayer from "@/components/MusicPlayer";
import NavHeader from "@/components/NavHeader";
import { PlayerProvider } from "@/context/PlayerContext";

const manropeHeading = Manrope({ subsets: ['latin'], variable: '--font-heading' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, manropeHeading.variable)}
    >
      <body>
        <PlayerProvider>
        <div className=" z-4 sticky top-0 left-0 right-0"> <NavHeader /></div>
        <div className="fixed top-0 bottom-0 left-0 z-10"><SideBar /></div>
        <div className="fixed bottom-0 left-0 right-0 z-40"><MusicPlayer /></div>
        
        <div className="ml-70 mb-30"><ThemeProvider>{children}</ThemeProvider></div>
        </PlayerProvider>
      </body>
    </html>
  )
}
