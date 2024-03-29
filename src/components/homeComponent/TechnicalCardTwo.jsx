import React from "react";
import useScrollTriggerAnimation from "../../hooks/useScrollTriggerAnimation";

const cardDetails = [
  {
    title: "Software I work with",
    description:
      "One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience.",
    tools: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "Vscode",
      "Postman",
      "After Effects",
      "Premiere Pro",
    ],
  },
];

export default function TechnicalCardTwo({ title, description, tools = [] }) {
  //
  const animationRef = useScrollTriggerAnimation();

  return (
    <>
      {cardDetails.map((cardDetail) => {
        return (
          <div
            ref={animationRef}
            className="bg-[#0e0f11] text-white p-4 rounded-xl"
          >
            {/* Below is the svg icon */}
            <div className="w-8 h-8 bg-[#141415] text-[#7feaff] mb-2">
              <span class="about_icon__HUfPT">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fat"
                  data-icon="fingerprint"
                  class="svg-inline--fa fa-fingerprint "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M123.1 158.1C99.93 186.7 87.43 222.8 87.1 259.6c.6426 38.81-2.469 77.58-9.252 115.2c-1.748 9.566 12.86 14.3 15.83 2.41c6.94-38.89 10.14-78.68 9.418-117.8c-.4258-33.88 10.5-65.41 31.59-91.28C142.4 159.7 129.8 149.1 123.1 158.1zM248.1 270c1.147 73.41-8.127 144.1-28.35 215.8c-2.703 11.2 12.75 13.88 15.45 4.313c20.58-72.98 30.03-144.9 28.9-219.9C264.1 259.2 248.1 259.5 248.1 270zM254.1 180.3c-24.62 0-47.06 9.035-63.2 25.44C176.2 221.6 167.8 242.7 168.1 265.1c.7695 49.11-3.84 98.22-13.7 145.1c-2.182 10.32 13.44 13.78 15.67 3.203c10.04-48.52 14.77-98.83 14.03-149.5C183.9 247 190.9 229.5 203.6 216.7C216.5 203.5 234.5 196.2 254.2 196.2c40.47 .6406 73.38 32.63 73.86 71.31c.8867 48.59-2.76 97.85-10.84 146.3c-1.559 9.531 13.23 14.05 15.83 2.359c8.143-49.39 11.86-99.56 11.01-148.1C343.4 220 303.4 180.1 254.1 180.3zM252.5 16.01C183.9 15.58 124.9 41.1 81.83 84.3C38.52 127.6 15.2 185.2 16.13 246.4L16.01 268.2C15.71 279.2 31.69 279.8 32.01 269L32.13 245.8C31.32 189.1 52.93 135.7 93.03 95.55c64.18-63.97 140.1-63.64 159.2-63.53c74.53 1.078 144.7 38.25 187.6 99.27c6.022 8.606 19.13-.5365 13.02-9.232C407 56.83 332.1 17.18 252.5 16.01zM253.7 98.12c-22.48-.2734-36.84 3.359-41.72 4.547C201.6 105.1 205.1 120.6 215.8 118.2c3.988-.9063 17.86-4.133 37.77-4.039c83.93 1.258 153.3 68.7 154.7 150.4c.5098 38.65-1.416 77.55-5.723 115.7c-1.176 10.28 14.59 12.39 15.81 1.859c4.539-39.01 6.522-78.59 5.908-117.8C422.7 174 346.3 99.5 253.7 98.12zM490.5 207.1c-2.412-10.91-17.83-6.522-15.62 3.427c5.09 23.03 5.246 39.65 5.113 65.07c-.0977 10.73 15.9 10.79 15.1 .1406C496.1 253.1 496.2 232.9 490.5 207.1z"
                  ></path>
                </svg>
              </span>{" "}
            </div>
            {/* Card title */}
            <div className="flex items-baseline mb-8">
              <p className="font-bold text-md mt-2 mr-4 inline-block text-[#bfbfbf] bg-clip-text">
                {cardDetail.title}
              </p>
            </div>
            {/* card description */}
            <div className="font-light">
              <p className="text-[#888889] font-light">
                {cardDetail.description}
              </p>
            </div>
            {/* About section part two cards "tech stack" */}
            <div className="grid grid-cols-3 gap-2 mt-10">
              {cardDetail.tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex bg-[#141415] rounded-2xl px-1 py-1"
                >
                  <p className="text-xs ml-2 text-[#888889] uppercase font-mono font-semibold">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
