import React from "react";

const cardDetails = [
  {
    title: "Softskills that pay the bills",
    description:
      "In addition to my design and technical expertise I also have strong leadership, and time managememt skills - honed through my experience as a business owner. Outside of work I enjoy staying active by lifting, snowboarding, and hiking. I am confident in my ability to bring passion and value to any project.",
    tools: ["Illustrator", "VSCode", "PostMan", "After Effects"],
  },
];

export default function AboutCardTwo() {
  return (
    <>
      {cardDetails.map((cardDetail) => {
        return (
          <div className="bg-black text-white p-4 rounded-xl">
            {/* Project title and Github repo link */}
            <div className="flex items-baseline mb-8">
              <p className="font-bold text-md mt-2 mr-4 inline-block text-[#bfbfbf] bg-clip-text">
                {cardDetail.title}
              </p>
              <div className="flex bg-[#141415] rounded-2xl p-2"></div>
            </div>
            {/* Project synopsis */}
            <div className="font-thin text-3xl mb-8"></div>

            {/* Dynamically Rendered tech stack for project */}
            <div className="grid grid-cols-3 gap-2">
              {cardDetail.tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex bg-[#141415] rounded-2xl px-1 py-1"
                >
                  <p className="text-xs ml-2 text-[#888889] truncate">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
