import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
          <Header />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
