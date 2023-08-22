import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cirena & Matheus</title>
        <meta
          name="description"
          content="Se você quer animar o seu evento com músicas populares, está no lugar certo. 
          Nós, Cirena e Matheus, cuidamos da trilha sonora ideal para criar a atmosfera desejada. "
        />
        <link rel="icon" href="/public/img/logocm.ico" />
      </Head>

      <Navbar />
     
      
      <Hero />
      <SectionTitle
        pretitle=""
        title="">
      </SectionTitle>
      
      <SectionTitle
        pretitle="De um Play"
        title="NOSSO AO VIVO!">
        Se você quer animar o seu evento com músicas populares, está no lugar certo. 
        Nós, Cirena e Matheus, cuidamos da trilha sonora ideal para criar a atmosfera desejada.
      </SectionTitle>
      <Video />
      
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;
