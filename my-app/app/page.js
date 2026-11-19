import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import Foot from "./component/Foot";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Aboutus />
        <Services />
        <Contactus />
      </main>
      <Foot/>
    </>
  );
}
