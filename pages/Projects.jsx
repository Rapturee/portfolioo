import React from "react";
import Image from "next/image";
import quizImg from "../images/quiz.png";
import radioImg from "../images/reactRadio.png";


const ProjectSectionList = () => {
  const projects = [
    {
      title: "This is a Quiz App i made myself for fun while we had a group project",
      description: "Links Below",
      liveLink: "https://chas-quizz.vercel.app/",
      Github: "https://github.com/Rapturee/Chas-quizz.git",
      image: quizImg
    },
    {
      title: "This Radio site is using fetch to play Radio stations from sweden!",
      description: "Links Below",
      liveLink: "https://react-radio-topaz.vercel.app/",
      Github: "https://github.com/Rapturee/reactRadio.git",
      image: radioImg
    },
  ];

  const ProjectCard = ({ title, description, liveLink, Github, image }) => (
    <div className="dark:bg-gray-900 border-solid border-1 shadow-lg rounded-lg overflow-hidden m-5 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="px-6 py-4">
            <h3 className="text-3xl font-semibold mb-2 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-xl dark:text-gray-300">
              {description}
            </p>
          </div>
          <div className="px-6 py-4 flex justify-start space-x-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-500 font-semibold hover:underline"
              >
                Live Site
              </a>
            )}
            {Github && (
              <a
                href={Github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-500 font-semibold hover:underline"
              >
                Code Repository
              </a>
            )}
          </div>
        </div>
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            height="300"
            width="500" // Adjust width as needed
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
  

  return projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      liveLink={project.liveLink}
      Github={project.Github}
      image = {project.image}
    />
  ));
};

export default ProjectSectionList;
