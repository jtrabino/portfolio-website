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
    <div className="xl:px-36 lg:px-30 md:px-20 px-6 mx-auto min-h-screen max-w-screen-2xl">
      <div className="lg:grid lg:grid-cols-3">
        <div className="flex flex-row col-span-1 lg:py-20 md:pt-16 pt-10 2xs:px-4 lg:sticky lg:top-0 lg:max-h-screen lg:min-h-screen lg:mr-6">
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
                  <h1 className="md:text-2xl text-xl font-bold">Jeremiah Toh Rabino</h1>
                  <h2 className="md:text-sm text-xs font-medium">
                    Computer Science Undergraduate @ Singapore Management University
                  </h2>
                </div>
              </div>
              <h2 className="md:text-base text-sm font-extralight text-muted-foreground">
                Hi! &#128075; I&apos;m an aspiring software engineer with great interest in machine learning and AI but also enjoy full-stack development.
              </h2>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row space-x-4">
                  <a href="https://github.com/jtrabino" target="_blank" rel="noreferrer noopener">
                    <FaGithub className="md:text-2xl text-xl hover:text-muted-foreground transition-colors duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/jtrabs/" target="_blank" rel="noreferrer noopener">
                    <FaLinkedin className="md:text-2xl text-xl hover:text-muted-foreground transition-colors duration-300" />
                  </a>
                </div>
                <div>
                  <a href="/resume.pdf" target="_blank">
                    <button className="md:text-base text-sm flex flex-row rounded-lg px-4 py-2 border border-secondary items-center bg-background hover:bg-secondary transition-colors duration-300">
                      <span>Resume</span>
                      <FaRegFilePdf className="ml-2" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 lg:space-y-20 space-y-16 lg:ml-6 lg:pb-20 md:pb-16 pb-12">
          <section id="experience" className="lg:scroll-mt-20 lg:mt-20 scroll-mt-16 mt-16">
            <h1 className="md:text-2xl text-xl lg:px-6 px-4 font-bold mb-6">Experience</h1>
            <ExperienceCardList />
          </section>
          <section id="projects" className="lg:scroll-mt-20 lg:mt-20 scroll-mt-16 mt-16">
            <h1 className="md:text-2xl text-xl lg:px-6 px-4 font-bold mb-6">Projects</h1>
            <ProjectCardList />
          </section>
        </div>
      </div>
    </div>
  );
}
