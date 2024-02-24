"use client";

import BlurredCircle from "@/components/BlurredCircle";
import Intro from "@/components/Intro";
import Container from "../components/UI/Container";
import About from "@/components/About";
import WorkGrid from "@/components/WorkGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col mt-[120px] ">
        <BlurredCircle />
        <Intro />
        <About />
        <WorkGrid />
        <Skills />
        <Experience />
      </div>
    </Container>
  );
}
