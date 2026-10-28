import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yellow Dubai",
  description: "Yellow Dubai Teams Up with People's Favorite & Trusted Media Outlets",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={beVietnamPro.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="-7DGom7gVVyPJjbcIPiyrWxX7HJSE4CM93zI7GeIVCs"
        />      
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
