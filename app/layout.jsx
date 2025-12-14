/**
 * @file layout.jsx
 * @description Root application layout.
 * Defines global styles, fonts, and metadata.
 */

import './globals.css';
import 'remixicon/fonts/remixicon.css';

export const metadata = {
  title: 'VisQode - We Build & Scale Digital Products',
  description:
    'Founding successful companies by combining ideas with business expertise, capital and Technical execution.',
  generator: 'Abdulla Al Mahin',
};

/**
 * Root Layout Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} The HTML wrapper
 */
export default function RootLayout({ children }) {
  // Theme update trigger
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        ></link>

        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
