"use client";

import BlurredCircle from "@/components/BlurredCircle";
import Intro from "@/components/Intro";
import Container from "../components/UI/Container";
import About from "@/components/About";

export default function Home() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col mt-[120px] ">
        <BlurredCircle />
        <Intro />
        <About />
      </div>
    </Container>
  );
}
