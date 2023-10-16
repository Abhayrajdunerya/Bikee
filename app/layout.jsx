import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Bikee',
  description: 'Bike & Car rental services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative overflow-x-hidden'>
        <Provider>
          <main className=''>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Provider>

        
      </body>
    </html>
  )
}
