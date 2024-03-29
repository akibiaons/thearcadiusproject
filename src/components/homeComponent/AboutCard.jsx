import React from "react";

const cardDetails = [
  {
    title: "Softskills that pay the bills",
    description:
      "In addition to my design and technical expertise I also have strong leadership, and time managememt skills - honed through my experience as a business owner. Outside of work I enjoy staying active by lifting, snowboarding, and hiking. I am confident in my ability to bring passion and value to any project.",
  },
];

export default function AboutCard() {
  return (
    <>
      {cardDetails.map((cardDetail) => {
        return (
          <div className="bg-[#0e0f11] text-white p-4 rounded-xl">
            {/* Below is the svg icon */}
            <div className="w-8 h-8 bg-[#141415] text-[#7feaff] mb-2">
              <span class="about_icon__HUfPT">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fat"
                  data-icon="ear-listen"
                  class="svg-inline--fa fa-ear-listen "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M160.1 320c-17.62 0-32.02 14.37-32.02 31.1s14.4 31.1 32.02 31.1s32.02-14.38 32.02-31.1S177.7 320 160.1 320zM160 368c-8.822 0-16-7.178-16-15.1c0-8.822 7.178-15.1 16-15.1s16 7.178 16 15.1C176 360.8 168.8 368 160 368zM32.02 448C14.4 448 0 462.4 0 480S14.4 512 32.02 512s32.02-14.38 32.02-31.1S49.65 448 32.02 448zM32 496c-8.822 0-16-7.178-16-15.1c0-8.822 7.178-15.1 16-15.1s16 7.178 16 15.1C48 488.8 40.82 496 32 496zM379.9 1.028c-3.844-2.187-8.719-.7656-10.86 3.141c-2.141 3.859-.7344 8.734 3.141 10.86c71.04 39.23 118.5 113.4 123.9 193.5c.2813 4.234 3.797 7.469 7.969 7.469c.1875 0 .375 0 .5469-.0156c4.406-.2969 7.75-4.109 7.453-8.514C506.3 121.9 455.6 42.85 379.9 1.028zM69.66 378.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.187 0 11.31l64 63.1C123.9 455.2 125.1 455.1 128 455.1s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.187 0-11.31L69.66 378.3zM360 255.1c4.422 0 8-3.578 8-7.1V231.1c0-66.17-53.83-119.1-120-119.1S128 165.8 128 231.1v15.1C128 252.4 131.6 255.1 136 255.1S144 252.4 144 247.1V231.1c0-57.34 46.66-103.1 104-103.1S352 174.7 352 231.1v15.1C352 252.4 355.6 255.1 360 255.1zM248 48c-101.5 0-184 82.55-184 183.1v15.1C64 252.4 67.58 255.1 72 255.1S80 252.4 80 247.1V231.1c0-92.64 75.36-167.1 168-167.1S416 139.4 416 231.1c0 57.42-22.19 111.5-62.47 152.4l-1.953 1.969l-.2969 2.766C344.6 450.1 293.3 495.1 232 495.1c-4.422 0-8 3.578-8 7.1c0 4.422 3.578 7.1 8 7.1c68.58 0 126.1-50.69 134.9-118.4C408.9 350 432 292.7 432 231.1C432 130.5 349.5 48 248 48z"
                  ></path>
                </svg>
              </span>{" "}
            </div>
            {/* Card title */}
            <div className="flex items-baseline mb-4">
              <p className="font-bold text-md mt-2 mr-4 inline-block text-[#bfbfbf] bg-clip-text">
                {cardDetail.title}
              </p>
            </div>
            {/* Card description */}
            <div>
              <p className="text-[#888889] font-light">
                {cardDetail.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
