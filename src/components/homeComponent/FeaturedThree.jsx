import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import css from "../../styles/App.css";

// ProjectCard component
export default function ProjectCard3() {
  // State hook with useEffect
  const [projects, setProjects] = useState([
    {
      id: 2,
      title: "Memphis Turnkey Rental",
      isPrivate: false,
      desc: "Frontend for clients to browse property listings, custom backend to manage C.R.U.D for our client and admin system to manage over 100+ rental units",
      tools: [
        "JavaScript",
        "TypeScript",
        "NextJS",
        "Node",
        "Firebase",
        "TailwindCSS",
        "SQL",
      ],
      mediaType: "image",
      mediaSrc:
        "https://res.cloudinary.com/dscoioscc/image/upload/v1717416530/Screenshot_2024-06-03_at_5.08.43_AM_napxgd.png",
    },
  ]);

  return (
    <>
      {projects.map((project) => {
        // Split up the words below into an array
        const words = project.desc.split(" ");
        // Then slice the 6th word and join the array back together
        const firstSixWords = words.slice(0, 6).join(" ");
        // Finally join the words into a string
        const theRest = words.slice(6).join(" ");

        return (
          <div className="lg:flex">
            <div
              key={project.id}
              className="bg-black text-white p-4 rounded-xl lg:w-[50%]"
            >
              {/* Project title and Github repo link */}
              <div className="flex items-baseline mb-8">
                <p className="font-bold text-md mt-2 mr-4 bg-gradient-to-r from-[#a7d575] via-[#52abc4] to-[#37eaf7] inline-block text-transparent bg-clip-text">
                  {project.title}
                </p>
                <div className="flex bg-[#141415] rounded-2xl p-2">
                  <FaGithub className="w-4 h-4 text-[#888889]" />
                  <p className="text-xs ml-2 text-[#888889]">
                    {project.isPrivate ? "Private" : "Public"}
                  </p>
                </div>
              </div>
              {/* Project synopsis */}
              <div className="font-thin text-3xl mb-8">
                <p className="text-[#888889]">
                  <span className="text-white pr-2">{firstSixWords}</span>{" "}
                  {theRest}
                </p>
              </div>

              {/* Dynamically Rendered tech stack for project */}
              <div className="grid grid-cols-3 gap-2">
                {project.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex bg-[#141415] rounded-2xl px-1 py-1"
                  >
                    <p className="text-xs ml-2 text-[#888889] truncate">
                      {tool}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex lg:hidden w-30 h-26 align-baseline mt-12">
                <div>
                  <img
                    src="https://res.cloudinary.com/dscoioscc/image/upload/v1717416530/Screenshot_2024-06-03_at_5.08.43_AM_napxgd.png"
                    alt="knj green pack home page"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-[70%]">
              <div>
                <img
                  src="https://res.cloudinary.com/dscoioscc/image/upload/v1717416530/Screenshot_2024-06-03_at_5.08.43_AM_napxgd.png"
                  alt="knj green pack"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
