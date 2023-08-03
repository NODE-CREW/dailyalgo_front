import Head from "next/head";

const Home = () => (
  <div style={{ marginTop: 60 }}>
    <Head>
      <title>HOME | DAILY ALGO</title>
      <meta name="description" content="데일리알고 메인 홈입니다." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* {isLoading && <div>Loading...</div>} */}

    <main>DailyAlgo</main>
  </div>
);

export default Home;
