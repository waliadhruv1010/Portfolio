"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages : C/C++, Java, Python, JavaScript</li>
        <li>Full Stack Development : MERN,Java-Backend(Spring MVC)</li>
        <li>Database : MySql, MongoDB</li>
        <li>Data Analysis : Numpy, Pandas, Matplotlib</li>
        <li>Developer Tools : IntelliJ, VS Code, Git, Eclipse</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Final Year B.E-CSE Student at Chitkara University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>DSA with Java From Apna College</li>
        <li>Full Stack Developer From Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative py-16 px-4 sm:px-8" id="about">
      {/* Gradient Background */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center relative z-10">
        <Image
          src="/images/about-image.png"
          alt="About me image"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I’m a passionate Full Stack Web Developer and Junior Software Developer Intern,
            focused on Java Full Stack technologies like Spring Boot, Hibernate, REST APIs, and modern
            frontend tools. I’ve built scalable apps such as a Twitter Clone and Job Portal using React,
            Node.js, and Postgres. I thrive in collaborative environments, love solving problems,
            and constantly sharpen my skills through projects, coding challenges, and open-source work.
          </p>

          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8 text-[#E4E4E7]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
