import Faq from "./Faq";
import Features from "./Feartures";
import Footer from "./Footer";
import Hero from "./Hero";
import Integration from "./Integration";
import Intro from "./Introduction";
import Logo from "./Logo";

const Page = () => {
  return (
    <div className="w-full flex flex-col md:gap-38 gap-28">
      <Hero />
      <Logo />
      <Intro />
      <Features />
      <Integration />
      <Faq />
      <Footer />
    </div>
  );
};

export default Page;
