import "./globals.css";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  title: "Azhar Sheeno",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true}
      className={`${poppins.className} bg-slate-950 `}
      
      >
        {children}
      </body>
    </html>
  );
}
