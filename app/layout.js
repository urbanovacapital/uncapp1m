
import './globals.css'

export const metadata = {
  title: 'Urbanova Capital',
  description: 'Invierte en proyectos inmobiliarios premium desde 100€.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
