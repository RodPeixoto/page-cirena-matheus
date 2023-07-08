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
          content="Site de dupla musical, tocam e cantam mpb, sertanejo, pop e rock para festas e eventos."
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
        Navegue pela nossa página para nos conhecer melhor, 
        ouça um trecho das nossas músicas e acompanhe as nossas próximas apresentações.
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