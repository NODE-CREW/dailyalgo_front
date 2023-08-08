import { ReactNode } from "react";
import "../styles/common.scss";
// import { Footer } from "src/components/organisms/Footer";
// import { Header } from "src/components/organisms/Header";
interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ko">
    <head>
      <title>HOME | DAILY ALGO</title>
      <meta name="description" content="데일리알고 메인 홈입니다." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/src/styles/common.scss" />
    </head>
    <body>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </body>
  </html>
);

export default RootLayout;
