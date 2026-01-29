import type { Metadata, Viewport } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'ResumeDia - Resume Builder for Blue-Collar Professionals',
  description: 'Create professional resumes optimized for ATS systems. Perfect for trades, construction, and skilled professionals.',
  keywords: 'resume builder, ATS, blue-collar, trades, construction, professional',
  manifest: '/manifest.json',
  authors: [{ name: 'ResumeDia Team' }],
  creator: 'ResumeDia',
  publisher: 'ResumeDia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resumedia.app',
    title: 'ResumeDia - Resume Builder for Blue-Collar Professionals',
    description: 'Create professional resumes optimized for ATS systems.',
    siteName: 'ResumeDia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResumeDia - Resume Builder for Blue-Collar Professionals',
    description: 'Create professional resumes optimized for ATS systems.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6197ff" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="bg-surface-50 text-surface-900 antialiased">
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
