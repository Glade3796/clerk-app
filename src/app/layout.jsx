
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "How gay is....",
  description: "Discussing LGBT issues in film",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex h-2/3 w-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
