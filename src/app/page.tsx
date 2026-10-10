import Hero from "./app/components/Hero";
import Experience from "./app/components/Experience";
import SipSafari from "./app/components/SipSafari";
import Escape from "./app/components/Escape";

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
