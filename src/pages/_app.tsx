import type { AppProps } from "next/app";
import "../styles/common.scss";
import { Footer } from "src/components/organisms/Footer";
import { Header } from "src/components/organisms/Header";

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
