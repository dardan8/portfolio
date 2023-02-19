import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Header from "../../containers/Header";
import TechnologySection from "../../containers/TechnologySection";
import ProjectsSection from "../../containers/ProjectsSection";
import BottomCTA from "../../containers/BottomCTA";
import Footer from "../../containers/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dardan Dara Portfolio</title>
        <meta name='description' content='Frontend Developer Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <TechnologySection />
        <ProjectsSection />
        <BottomCTA />
        <Footer />
      </main>
    </>
  );
}
