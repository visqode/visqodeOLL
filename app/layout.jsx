import "./globals.css"

export const metadata = {
  title: "VisQode - We Build & Scale Digital Products",
  description:
    "Founding successful companies by combining ideas with business expertise, capital and Technical execution.",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
