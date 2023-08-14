import { ReactNode } from "react";
import { Header } from "@components/layout/Header";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ko">
    <head />
    <body>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
