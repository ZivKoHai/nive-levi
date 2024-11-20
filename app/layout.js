import localFont from "next/font/local";
import "./globals.css";
import Footer from "./component/footer";
import Nav from "./component/nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hey Im Niv",
  description: "Niv Levi's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <div className="pb-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
