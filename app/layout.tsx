import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SideNav from "./components/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
      <Container fluid={true} className='max-w-screen-lg flex flex-col min-h-screen'>
        <NavBar />
        <div className="flex flex-grow">
          <SideNav />
          {children}
        </div>
        <Footer />
      </Container>
      {children}</body>
    </html>
  );
}
