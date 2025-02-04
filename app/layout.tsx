import { Metadata } from "next"
import Header from "../components/header/header"
import "./global.css"

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'New York Times'
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
