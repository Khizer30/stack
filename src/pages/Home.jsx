import HeroSection from "../components/hero/HeroSection";
import HeroFounders from "../components/hero/HeroFounders";
import Team from "../components/team/Team";
import WhatWeDoSection from "../components/services/Whatwedosection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/contact/Contactsection";

const Home = () => {
  return (
    <main className="min-h-screen pt-20">
      <HeroSection />
      <HeroFounders />
      <Team />
      <WhatWeDoSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
