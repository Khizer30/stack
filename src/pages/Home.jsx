import ContactSection from "../components/contact/Contactsection";
import HeroFounders from "../components/hero/HeroFounders";
import HeroSection from "../components/hero/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import WhatWeDoSection from "../components/services/Whatwedosection";
import Team from "../components/team/Team";

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
