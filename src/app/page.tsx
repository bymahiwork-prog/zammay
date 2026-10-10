import HomeHero from "./components/HomeHero";
import ExperienceSection from "./components/ExperienceSection";
import Escape from "./components/Escape";

export default function Home() {
  return (
    <main style={{ background: "#0B0D0B" }}>
      <HomeHero />
      <ExperienceSection />
      <Escape />
    </main>
  );
}
