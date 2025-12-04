import Container from "@/components/common/Container";
import Header from "@/components/common/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSans.className}>
      <body>
        <ThemeProvider>
          <Header />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
