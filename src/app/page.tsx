"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import ExperienceCardList from "@/components/experience/ExperienceCardList";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="px-12 mx-auto min-h-screen max-w-screen-2xl">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-row col-span-1 md:py-16 lg:py-24 lg:sticky lg:top-0 lg:max-h-screen lg:min-h-screen">
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <NavigationMenu />
              <ModeToggle />
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-2xl font-bold">jeremiah toh rabino</h1>
              <h2 className="text-md font-light">
                Hi! I'm an aspiring software engineer studying Computer Science at Singapore Management University. 
                I have a strong passion in machine learning and AI, as well as software development. I enjoy building 
                innovative solutions and exploring ways technology can be used to solve real-world problems.
              </h2>
              <div className="flex flex-row space-x-4 pt-1">
                <a href="https://github.com/jtrabino" target="_blank" rel="noreferrer noopener">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/jtrabs/" target="_blank" rel="noreferrer noopener">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-24">
          <section id="experience" className="scroll-mt-16 lg:scroll-mt-24 pt-24">
            <ExperienceCardList/>
          </section>
          <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 pb-24">
            <ExperienceCardList />
          </section>
        </div>
      </div>
    </div>
  );
}
