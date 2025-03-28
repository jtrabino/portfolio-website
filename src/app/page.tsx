"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ExperienceCardList from "@/components/experience/ExperienceCardList";
import ProjectCardList from "@/components/proj/ProjectCardList";
import ModeToggle from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="xl:px-48 lg:px-30 md:px-20 sm:px-12 px-6 mx-auto min-h-screen max-w-screen-2xl">
      <div className="lg:grid lg:grid-cols-3">
        <div className="flex flex-row col-span-1 lg:py-24 md:py-16 sm:py-14 py-10 lg:sticky lg:top-0 lg:max-h-screen lg:min-h-screen lg:mr-6">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <NavigationMenu />
              <ModeToggle />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/assets/pfpsq.jpg" alt="myavatar" />
                  <AvatarFallback>JTR</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">Jeremiah Toh Rabino</h1>
                  <h2 className="text-sm font-medium">
                    Computer Science Undergraduate @ Singapore Management University
                  </h2>
                </div>
              </div>
              <h2 className="text-md font-extralight text-muted-foreground">
                Hi! &#128075; I&apos;m an aspiring software engineer with great interest in machine learning and AI but also enjoy full-stack development.
              </h2>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row space-x-4 pt-1">
                  <a href="https://github.com/jtrabino" target="_blank" rel="noreferrer noopener">
                    <FaGithub className="text-2xl hover:text-muted-foreground transition-colors duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/jtrabs/" target="_blank" rel="noreferrer noopener">
                    <FaLinkedin className="text-2xl hover:text-muted-foreground transition-colors duration-300" />
                  </a>
                </div>
                <div>
                  <a href="/resume.pdf" target="_blank">
                    <button className="flex flex-row rounded-lg px-4 py-2 border border-secondary items-center bg-background hover:bg-secondary transition-colors duration-300">
                      <span>Resume</span>
                      <FaRegFilePdf className="ml-2" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 space-y-24 lg:ml-6 pb-24">
          <section id="experience" className="scroll-mt-16 lg:scroll-mt-24 mt-24">
            <h1 className="text-2xl lg:px-6 md:px-4 font-bold mb-6">Experience</h1>
            <ExperienceCardList />
          </section>
          <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 mt-24">
            <h1 className="text-2xl lg:px-6 md:px-4 font-bold mb-6">Projects</h1>
            <ProjectCardList />
          </section>
        </div>
      </div>
    </div>
  );
}
