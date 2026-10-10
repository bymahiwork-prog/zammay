import Hero from "./components/Hero";
import Experience from "./components/Experience";
import SipSafari from "./components/SipSafari";
import Escape from "./components/Escape";

export default function Home() {
  return (
    <main style={{ background: "#0B0D0B" }}>
      <Hero />
      <Experience />
      <SipSafari />
      <Escape />
    </main>
  );
}
