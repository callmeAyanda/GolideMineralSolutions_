import "./globals.css";


export const metadata = {
  title: "Golide Minerals Solutions",
  description: "Created by Ayanda Makhubu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
