"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Twitter Clone",
    description: " Implemented Login, Signup, Create Tweet, Follow User like 10+ more features using Springboot,Rect,SQL.",
    image: "/images/projects/1.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/waliadhruv1010/Twitter_clone",
    previewUrl: "https://github.com/waliadhruv1010/Twitter_clone",
  },
  {
    id: 2,
    title: "Chatting App",
    description: "Developed a real-time chat application using Spring Boot for the backend logic and API handling.",
    image: "/images/projects/2.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/waliadhruv1010/real-time-chat-app-spring",
    previewUrl: "https://github.com/waliadhruv1010/real-time-chat-app-spring",
  },
  {
    id: 3,
    title: "Weather ForeCasting App",
    description: "Provide Weather Temp Area of all over the world just by one click.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/waliadhruv1010/Weather_ForecastReactjs",
    previewUrl: "https://weather-forecast-reactjs-theta.vercel.app/",
  },
  {
    id: 4,
    title: "Hotel Management System(Console-Based)",
    description: "Created a Console based Hotel Management System Using Java,JDBC,SQL.",
    image: "/images/projects/4.png",
    tag: ["All", "Java"],
    gitUrl: "https://github.com/waliadhruv1010/HotelManagementSystem",
    previewUrl: "https://github.com/waliadhruv1010/HotelManagementSystem",
  },
  {
    id: 5,
    title: "Send Email using Python",
    description: "Simple Python Script to send email using python libraries.",
    image: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "https://github.com/waliadhruv1010/SEND_EMAIL_USING-_PYTHON",
    previewUrl: "https://github.com/waliadhruv1010/SEND_EMAIL_USING-_PYTHON",
  },
  {
    id: 6,
    title: "Versatile AR",
    description: "Ecommerce app embedded with AR models of Clothes using HTML,CSS,BOOTSTRAP,BLENDER.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/waliadhruv1010/VersatileAR",
    previewUrl: "https://waliadhruv1010.github.io/VersatileAR/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        /> 
        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
       
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
