import { ReactNode } from "react";
import "./global.scss";
import { Header } from "@components/layout/Header";
import "../styles/base/_reset.scss";
import "../styles/base/_font.scss";
import ReduxProvider from "src/redux/provider";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ko">
    <head />
    <body>
      <Header />
      <ReduxProvider>
        {children}
        <div id="modal-root" />
      </ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
