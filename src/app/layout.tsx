import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Minimal Working',
  description: 'Site Next.js minimal qui marche',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: 'system-ui' }}>
        {children}
      </body>
    </html>
  )
}