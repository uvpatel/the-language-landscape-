
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thelanguagefoundation.com"),
  title: {
    default: "The Language Landscapes | Language, Culture & Connection",
    template: "%s | The Language Landscapes",
  },
  description:
    "Discover languages, explore cultures and find your voice with The Language Landscapes. Explore French courses, TEF, TCF, DELF preparation and multilingual learning.",
  applicationName: "The Language Landscapes",
  keywords: [
    "The Language Landscapes",
    "French language courses",
    "TEF preparation",
    "TCF preparation",
    "DELF courses",
    "Language learning",
    "French classes",
    "Multilingual education",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "The Language Landscapes",
    title: "The Language Landscapes",
    description:
      "A world of language, culture and expression. Step in curious. Step out multilingual.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Language Landscapes",
    description:
      "Discover languages. Explore cultures. Find your voice.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F5EF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-[#F8F5EF] font-[family-name:var(--font-body)] text-[#292624] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
