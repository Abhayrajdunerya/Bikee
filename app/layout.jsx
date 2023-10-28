import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

import ToastProvider from '@/components/ToastProvider';

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
      <Script src='https://checkout.razorpay.com/v1/checkout.js' />
      {/* <script src='https://checkout.razorpay.com/v1/checkout.js'></script> */}
      <body className='relative overflow-x-hidden'>
          <Provider>
            <ToastProvider>
                <main className=''>
                  <Navbar />
                  {children}
                  <Footer />
                </main>
            </ToastProvider>
          </Provider>
      </body>
    </html>
  )
}
