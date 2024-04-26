import { Noto_Sans } from "next/font/google";
import "./globals.css";

import NavLinks from "@/components/NavLinks";
import Image from "next/image";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Chibi HelpDesk",
  description: "A simple ticketing system for a small company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <header className="bg-white flex justify-between px-96 py-5 items-center">
          <div className="flex items-center gap-4 text-primary">
            <Image
              src={"/ctholly.png"}
              width={40}
              height={100}
              alt="Logo of the web app"
            />
            <span className="text-lg">Chibi HelpDesk</span>
          </div>
          <div>
            <NavLinks />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
