import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
      <Head>
        <title>Himanshu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="./resume/Resume.pdf" target="_blank">
        <footer className="sticky bottom-5 float-right inline-block cursor-pointer">
          <div className="flex justify-end mr-3 items-center rounded-full px-4 py-2 grayscale hover:grayscale-0 cursor-pointer animate-pulse bg-[#F7AB0A]">
            <Image
              className="h-5 w-5 "
              src="/download.svg"
              width="25"
              height="25"
              alt="Footer image"
            />
            <h3 className="ml-2 text-black">Resume</h3>
          </div>
        </footer>
      </Link>
    </div>
  );
}
