import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import 'animate.css';
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SportNest",
  description: "Book your favourite sports venues instantly",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f8f9fa]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: "'DM Sans', sans-serif",
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
            },
          }}
        />
      </body>
    </html>
  );
}