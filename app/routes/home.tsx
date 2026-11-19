import { Header } from "~/sections/header/Header";
import type { Route } from "./+types/home";
import { Hero } from "~/sections/hero/Hero";
import { About } from "~/sections/about/About";
import { Skills } from "~/sections/skills/Skills";
import { Footer } from "~/sections/footer/Footer";
import { Contact } from "~/sections/contact/Contact";
import { Projects } from "~/sections/projects/Projects";
import { CursorParticles } from "~/components/Cursorparticles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <CursorParticles/>
      
      <Header/>
      <Hero/>
      <div className="w-[1905px] h-236 bg-linear-to-bl from-card to-deep">
        <About/>
        <Skills/>
      </div>
      <div className="w-[1905px] h-236 bg-linear-to-bl from-card to-deep pt-4">
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )    
}
