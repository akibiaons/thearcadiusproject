import React from "react";

const cardDetails = [
  {
    title: "Research and planning",
    description:
      "One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience.",
    tools: [
      "User research",
      "Digital strategy",
      "Design systems",
      "Brand strategy",
      "Product strategy",
      "Operations",
    ],
  },
];

export default function AboutCardTwo() {
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
            <div className="mx-auto grid grid-cols-2 grid-rows-3 gap-2 mt-4 ">
              <div className="flex flex-col p-2 rounded-lg border border-[#888889]">
                <div className="flex items-center">
                  <div className="w-4 h-4 text-[#7feaff]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="planet-moon"
                      class="svg-inline--fa fa-planet-moon "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <g class="fa-duotone-group">
                        <path
                          className="text-[#52abc4]"
                          fill="currentColor"
                          d="M448 288c0 123.8-100.3 224-224 224s-224-100.3-224-224c0-31.94 6.783-62.26 18.82-89.75C41.25 225.6 76.71 256 89.75 256h24.1c8.5 0 16.62 3.375 22.62 9.375L192 320v32c0 17.62 14.38 32 32 32v63.13c0 4.5 1.875 8.75 5.25 11.88c3.375 3.001 7.875 4.5 12.38 4c3.5-.375 7-.75 10.38-1.375c9-1.5 16.88-7.25 20.88-15.5l40.38-80.63C317.6 356.6 320 346.9 320 336.9V320c0-17.62-14.38-32-32-32H223.5c-10 0-19.38-3.875-26.38-10.88C185.3 265.3 184.5 246.1 195.5 233.5l49.75-57.38C267.8 142.2 242.8 95.21 220 64.2C221.4 64.18 222.7 64 224 64C347.8 64 448 164.3 448 288z"
                        ></path>
                        <path
                          class="fa-primary"
                          fill="currentColor"
                          d="M512 0c-35.38 0-64 28.62-64 64s28.62 63.1 64 63.1s64-28.62 64-63.1S547.4 0 512 0zM89.75 256h24.1c8.5 0 16.62 3.375 22.62 9.375L192 320v32c0 17.62 14.38 32 32 32v63.13c0 4.5 1.875 8.75 5.25 11.88c3.375 3.001 7.875 4.5 12.38 4c3.5-.375 7-.75 10.38-1.375c9-1.5 16.88-7.25 20.88-15.5l40.38-80.63C317.6 356.6 320 346.9 320 336.9V320c0-17.62-14.38-32-32-32H223.5c-10 0-19.38-3.875-26.38-10.88C185.3 265.3 184.5 246.1 195.5 233.5l49.75-57.38C267.8 142.2 242.8 95.21 220 64.2C129.9 65.79 52.92 120.4 18.82 198.3C41.25 225.6 76.71 256 89.75 256z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="text-[#888889] ml-2 font-mono font-bold text-xs">
                    User Research
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-2 rounded-lg border border-[#888889]">
                <div className="flex items-center">
                  <div className="w-4 h-4 text-[#7feaff]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="window"
                      class="svg-inline--fa fa-window "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g class="fa-duotone-group">
                        <path
                          class="fa-secondary"
                          fill="currentColor"
                          d="M224 128C224 145.7 209.7 160 192 160C174.3 160 160 145.7 160 128C160 110.3 174.3 96 192 96C209.7 96 224 110.3 224 128zM512 416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V224H512V416zM256 128C256 110.3 270.3 96 288 96C305.7 96 320 110.3 320 128C320 145.7 305.7 160 288 160C270.3 160 256 145.7 256 128z"
                        ></path>
                        <path
                          class="fa-primary"
                          fill="currentColor"
                          d="M448 32C483.3 32 512 60.65 512 96V224H0V96C0 60.65 28.65 32 64 32H448zM96 160C113.7 160 128 145.7 128 128C128 110.3 113.7 96 96 96C78.33 96 64 110.3 64 128C64 145.7 78.33 160 96 160zM192 96C174.3 96 160 110.3 160 128C160 145.7 174.3 160 192 160C209.7 160 224 145.7 224 128C224 110.3 209.7 96 192 96zM288 160C305.7 160 320 145.7 320 128C320 110.3 305.7 96 288 96C270.3 96 256 110.3 256 128C256 145.7 270.3 160 288 160z"
                        ></path>
                      </g>
                    </svg>{" "}
                  </div>
                  <p className="text-[#888889] ml-2 font-mono font-bold text-xs">
                    Design Systems
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-2 rounded-lg border border-[#888889]">
                <div className="flex items-center">
                  <div className="w-4 h-4 text-[#7feaff]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="layer-plus"
                      class="svg-inline--fa fa-layer-plus "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g class="fa-duotone-group">
                        <path
                          class="fa-secondary"
                          fill="currentColor"
                          d="M232.5 133.2C247.4 126.3 264.6 126.3 279.5 133.2L498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L232.5 133.2zM498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8L444.9 337.6L498.1 362.2z"
                        ></path>
                        <path
                          class="fa-primary"
                          fill="currentColor"
                          d="M456 56H488C501.3 56 512 66.75 512 80C512 93.25 501.3 104 488 104H456V136C456 149.3 445.3 160 432 160C418.7 160 408 149.3 408 136V104H376C362.7 104 352 93.25 352 80C352 66.75 362.7 56 376 56H408V24C408 10.75 418.7 0 432 0C445.3 0 456 10.75 456 24V56z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="text-[#888889] ml-2 font-mono font-bold text-xs">
                    Brand Strategy
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-2 rounded-lg border border-[#888889]">
                <div className="flex items-center">
                  <div className="w-4 h-4 text-[#7feaff]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="qrcode"
                      class="svg-inline--fa fa-qrcode "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <g class="fa-duotone-group">
                        <path
                          class="fa-secondary"
                          fill="currentColor"
                          d="M144 32C170.5 32 192 53.49 192 80V176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144zM128 96H64V160H128V96zM144 288C170.5 288 192 309.5 192 336V432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144zM128 352H64V416H128V352zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM320 160H384V96H320V160z"
                        ></path>
                        <path
                          class="fa-primary"
                          fill="currentColor"
                          d="M256 288H352V320H416V288H448V416H352V384H320V480H256V288zM384 480H352V448H384V480zM448 480H416V448H448V480z"
                        ></path>
                      </g>
                    </svg>{" "}
                  </div>
                  <p className="text-[#888889] ml-2 font-mono font-bold text-xs">
                    Digital Strategy
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-2 rounded-lg border border-[#888889]">
                <div className="flex items-center">
                  <div className="w-4 h-4 text-[#7feaff]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="cubes"
                      class="svg-inline--fa fa-cubes "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M448 92.99V207.5L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.2 507.5C432.2 513.7 416.3 513.8 402.2 507.1L288 460.7L173.8 507.1C159.7 513.8 143.8 513.7 129.8 507.5L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L128 207.5V92.99C128 69.32 142.9 48.2 165.2 40.24L269.2 3.134C281.4-1.209 294.6-1.209 306.8 3.134L410.8 40.24C433.1 48.2 448 69.32 448 92.99V92.99zM290.7 48.34C288.1 47.72 287.1 47.72 285.3 48.34L204.1 77.32L288 109.5L371.9 77.32L290.7 48.34zM264 238.6V151.7L176 117.9V207.2L264 238.6zM312 238.6L400 207.2V117.9L312 151.7V238.6zM176 353.9V455.1L264 418.7V320.2L176 353.9zM52.78 421.2L128 454.3V353.9L48 323.2V413.9C48 417.1 49.88 419.9 52.78 421.2zM400 353.9L312 320.2V418.7L400 455.1V353.9zM448 454.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V323.2L448 353.9V454.3zM155 250.7C153.2 250 151.3 250.1 149.5 250.7L70.81 280.6L152 311.7L235.9 279.5L155 250.7zM340.1 279.5L424 311.7L505.2 280.6L426.5 250.7C424.7 250.1 422.8 250 420.1 250.7L340.1 279.5z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#888889] ml-2 font-mono font-bold text-xs">
                    Product Strategy
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-2 rounded-lg border border-[#888889]">
                <div className="flex items-center">
                  <div className="w-4 h-4 text-[#7feaff]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="solar-system"
                      class="svg-inline--fa fa-solar-system "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g class="fa-duotone-group">
                        <path
                          class="fa-secondary"
                          fill="currentColor"
                          d="M391.8 188.1c-10.58 10.58-24.82 14.51-38.64 13.14c23.99 42.67 18.37 97.7-17.9 133.1c-43.5 44.32-114.7 44.95-159 1.455S131.2 221.1 174.7 177.7c35.79-36.46 91.67-44.25 136-18.9c-1.357-13.8 2.577-27.97 13.15-38.54c2.102-2.104 4.746-3.095 7.113-4.726c-23.46-12.52-49.05-19.51-74.97-19.51C167.7 96.01 96 167.6 96.01 256c.0059 88.36 71.64 159.1 160 159.1c42.43-.0039 83.11-16.87 113.1-46.87c51.02-51.02 59.67-127.6 27.37-188.1C394.9 183.4 393.9 186 391.8 188.1zM336.9 447.6c-78 32.85-168.1 15.28-228-44.53c-69.58-69.57-79.29-176.5-29.5-256.7C62.7 142.8 48.73 131.5 41.62 116c-64.97 99.28-53.88 233.8 33.34 320.1c76.11 76.31 191.9 96.57 289.4 50.62c-2.191-1.803-4.477-3.326-6.529-5.375C348.3 472.5 341 460.6 336.9 447.6zM437.1 75c-76.11-76.31-191.1-96.57-289.5-50.62c2.188 1.803 4.48 3.327 6.527 5.374c9.602 9.725 16.82 21.59 20.98 34.61c78-32.85 168.1-15.28 228 44.53c69.58 69.57 79.29 176.5 29.5 256.7c16.69 3.578 30.67 14.85 37.77 30.36C535.3 296.7 524.3 162.2 437.1 75z"
                        ></path>
                        <path
                          class="fa-primary"
                          fill="currentColor"
                          d="M52.33 52.35C52.33 52.36 52.34 52.35 52.33 52.35C30.47 74.23 30.46 109.7 52.33 131.6C74.2 153.4 109.7 153.4 131.5 131.6c21.87-21.87 21.87-57.32 0-79.19C109.7 30.49 74.21 30.49 52.33 52.35zM255.1 192C220.7 192 191.1 220.7 192 256C192 291.3 220.7 320 256 319.1S320 291.3 320 256C319.1 220.7 291.3 192 255.1 192zM391.8 188.1c18.74-18.75 18.72-49.12-.0194-67.87c-18.75-18.75-49.12-18.76-67.87-.0168c-18.75 18.75-18.76 49.14-.0121 67.89C342.6 206.9 373 206.9 391.8 188.1C391.8 188.1 391.8 188.1 391.8 188.1zM459.7 380.4c-21.87-21.87-57.33-21.87-79.2-.0039s-21.87 57.33-.0039 79.2s57.33 21.87 79.2 .002c0-.002 0 0 0 0C481.5 437.8 481.5 402.3 459.7 380.4z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="text-[#888889] ml-2 font-mono font-bold text-xs">
                    Operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
