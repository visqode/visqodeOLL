import "./globals.css";

export const metadata = {
  title: "VisQode - We Build & Scale Digital Products",
  description:
    "Founding successful companies by combining ideas with business expertise, capital and Technical execution.",
  generator: "Abdulla Al Mahin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
