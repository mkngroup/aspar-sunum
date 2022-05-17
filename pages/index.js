import Head from "next/head";
import VideoBg from "../components/videobg";
import NavbarMain from "../components/navbarmain";
import Mainfeed from "../components/mainfeed";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className="scroll-smooth">
      
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
