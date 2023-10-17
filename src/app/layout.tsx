import { ReactNode } from "react";
import "./global.scss";
import { Header } from "@components/layout/Header";
import "../styles/base/_reset.scss";
import "../styles/base/_font.scss";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ko">
    <head />
    <body>
      <Header />
      {children}
      <div id="modal-root" />
    </body>
  </html>
);

export default RootLayout;
