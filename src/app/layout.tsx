import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Providers, Header } from '@/components'
import Script from 'next/script'
import ClarityScript from '@/components/ClarityScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Local DGBet Playground',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const cookieStore = cookies()

  const initialChainId = cookieStore.get('appChainId')?.value
  const initialLiveState = JSON.parse(cookieStore.get('live')?.value || 'false')

  return (
    <html lang="en">
      <ClarityScript />
        <Script
        id="ClarityScript"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/mmacnr4e3b";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "mmacnr4e3b");
            `,
          }}
        />
      <body className={inter.className}>
      <Providers initialChainId={initialChainId} initialLiveState={initialLiveState}>
        <Header />

        <main className="container pt-5 pb-10">
          {children}
        </main>
      </Providers>
      </body>
    </html>
  )
}
