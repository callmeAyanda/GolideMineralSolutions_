// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Golide Minerals Exchange - Global Construction Excellence',
  description: 'Pioneering sustainable mineral construction solutions across continents. Bridging innovation with infrastructure.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#22313f]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
