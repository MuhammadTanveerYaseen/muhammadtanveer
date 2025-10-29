import "./globals.css";
export const metadata = {
  title: "JK Funnel Galaxy",
  description: "Converted to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}


