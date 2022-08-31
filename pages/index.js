import Head from "next/head";
import Hero from '../sections/Hero/index.js';
import Navbar from '../components/Navbar/index.js';
import Footer from '../sections/Footer/index.js';
import Body from '../sections/Body/index.js';

const Home = () => {
  return (
    <div >
      <Head>
        <title>Bitsy-bio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <Body></Body>
      <Footer></Footer>

    </div>
  );
};

export default Home;
