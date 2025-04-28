import { Heebo } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';
import ContactButtons from '../components/ContactButtons';

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
});

export const metadata = {
  title: 'הקסם של האירוע - הפקת אירועים',
  description: 'הפקת אירועים מושלמים - חתונות, בר מצווה, בריתות, ימי הולדת, אירועי חינה ואירועים עסקיים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} ${heebo.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <ContactButtons />
          <Footer />
        </div>
      </body>
    </html>
  );
} 