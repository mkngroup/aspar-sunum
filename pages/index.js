import Head from "next/head";
import VideoBg from "../components/videobg";
import NavbarMain from "../components/navbarmain";
import Mainfeed from "../components/mainfeed";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Aspar İlaç Kozmetik Gıda Sanayi A.Ş</title>
        <meta
          name="description"
          content="Aspar İlaç Kozmetik Gıda Sanayi A.Ş"
        />
        <link rel="icon" href="/A-1.png" />
      </Head>
      <NavbarMain />
      <main className="">
        <VideoBg />
        <Mainfeed />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
