import ParallaxImage from "./components/AnimatedHeader/ParallaxImage";
import AboutUs from "./containers/AboutUs";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Logos from "./containers/Logos";
import News from "./containers/News";
import Odyssey from "./containers/Odyssey";
import Price from "./containers/Price";
import Services from "./containers/Services";
import Testimonials from "./containers/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Logos />
      <AboutUs />
      <Services />
      <Price />
      <Testimonials />
      <Odyssey />
      <News />
      <Footer />
    </>
  );
}
