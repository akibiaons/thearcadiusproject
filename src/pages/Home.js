import TypeWriterText from "../components/homeComponent/TypeWriter";
// import FeaturedProjects from "../components/homeComponent/FeaturedProjects";
import ProjectCard from "../components/homeComponent/FeaturedProjects";
import ProjectCard2 from "../components/homeComponent/FeaturedTwo";
import AboutCard from "../components/homeComponent/AboutCard";
import AboutCardTwo from "../components/homeComponent/AboutCardTwo";
import TechnicalCard from "../components/homeComponent/TechnicalCard";
import TechnicalCardTwo from "../components/homeComponent/TechnicalCardTwo";
import TechnicalCardThree from "../components/homeComponent/TechnicalCardThree";

const Home = () => {
  return (
    <>
      {/* Hero Section part 1 below */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-radial blur-3xl opacity-50 scale-150 z-0">
        {/* The div for the blur and radiant */}
      </div>
      <div className="flex flex-col min-h-screen items-center bg-gray-900 lg:flex lg:flex-col lg:text-left lg:max-w-8xl lg:w-[100%]">
        {/* div for layout */}
        <div className="text-white mt-32 m-8 lg:w-[65%]">
          <div className="text-[#7feaff] font-mono lg:text-xl">
            <TypeWriterText />
          </div>
          {/* The typewriter package can be used above to write out the dynamic text */}
          <div className="text-[1rem] mt-4 mb-6">
            <h1 className="text-4xl lg:text-7xl font-semibold mb-2">
              Arthur Fernandez.
            </h1>
            <h4 className="text-[#888889] text-4xl lg:text-7xl leading-[3rem] font-semibold">
              I design & build meaningful experiences.
            </h4>
          </div>
          <div>
            <p className="font-mono text-[#bfbfbf] text-sm lg:text-lg leading-2">
              I'm a digital polymath - a constantly evolving digital creator
              driven by a passion for livelong learning and the desire to build
              and leave a lasting impact.
            </p>
          </div>
        </div>
        <div className="flex justify-start align-start lg:flex">
          <div className="bg-[#7feaff] rounded-full p-2 px-4 mr-8 font-mono font-semibold">
            <button>Contact me</button>
          </div>
          <div className="border-2 border-dotted text-[#bfbfbf] rounded-full p-2 px-4 font-mono font-semibold">
            <button>
              LinkedIn <span>{/* Small small arrow icon here...*/}</span>
            </button>
          </div>
        </div>
      </div>
      {/* end of the hero section */}
      {/* Part 2 is featured projects */}
      <div className="relative bg-gray-950 flex flex-col min-h-screen glow">
        {/*Div below is title of the section */}
        <div className="flex flex-col text-center mt-10">
          <p className="text-[#888889] mb-6 font-semibold uppercase text-sm">
            UX & Fullstack
          </p>
          <h2 className="text-4xl font-semibold text-[#bfbfbf] mb-6 lg:text-6xl">
            Featured Projects
          </h2>
          <p className="text-[#888889] mb-4 font-mono text-sm">
            Focused on the experience, driven by the engineering
          </p>
        </div>
        {/* Div above is the title for the section below is the featured product card*/}
        <div className="mx-auto w-[90%] pb-20 mt-20">
          <div>
            <ProjectCard />
          </div>
          <div className="mt-12">
            <ProjectCard2 />
          </div>
        </div>
      </div>
      {/* Part three is the about me */}
      <div className="relative bg-[#060708] flex flex-col min-h-screen">
        <div className="flex flex-col text-center mt-10">
          <p className="text-[#888889] mb-6 font-semibold uppercase text-sm">
            Synopsis
          </p>
          <h2 className="text-4xl font-semibold text-[#bfbfbf] mb-6">
            About Me
          </h2>
          <p className="text-[#888889] mb-4 font-mono text-sm w-[95%] mx-auto">
            Bringing a diverse skillset that includes UX design, UI design, full
            stack development, operational architecture, system design,
            videography, and branding.
          </p>
        </div>
        <div className="rounded-xl w-[80%] mx-auto mt-10">
          {/* the photo!!  */}
          <div class="about_image__hW1fB">
            <img
              className="rounded-2xl"
              src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1710536200/IMG_9518_o6sooj.jpg"
              alt="Arcadius profile pic"
            />
          </div>
        </div>
        <div className="mx-auto w-[90%] pb-6 mt-20">
          <div>
            <AboutCard />
          </div>
          <div className="mt-12">
            <AboutCardTwo />
          </div>
        </div>
      </div>
      {/* Part 4 is technical skills */}
      <div className="relative bg-[#060708] flex flex-col min-h-screen">
        <div className="flex flex-col text-center mt-10">
          <p className="text-[#888889] mb-6 font-semibold uppercase text-sm">
            Hardskills
          </p>
          <h2 className="text-4xl font-semibold text-[#bfbfbf] mb-6">
            Technical
          </h2>
          <p className="text-[#888889] mb-4 font-mono text-sm w-[95%] mx-auto">
            As a creative technologist, I craft intuitive digital experiences
            using a diverse set of tools and languages.
          </p>
        </div>
        <div className="mx-auto w-[90%] pb-6 mt-20">
          <div>
            <TechnicalCard />
          </div>
          <div className="mt-12">
            <TechnicalCardTwo />
          </div>
          <div className="mt-12">
            <TechnicalCardThree />
          </div>
        </div>
      </div>
      {/* Part 5 is the footer */}
      <div className="relative bg-[#060708] flex flex-col mx-auto pt-20">
        <div className="flex flex-col text-center mt-10 mx-auto">
          <div className="flex flex-col mx-auto">
            <p className="text-[#888889] font-semibold uppercase text-sm">
              Media
            </p>
            <div className="text-[#bfbfbf] flex items-center gap-4 mb-8 mt-4">
              <div className="mr-2">
                <a href="https://www.linkedin.com/in/arthur-fernandez-6225a725a/">
                  <div className="w-10 h-10">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin"
                      class="svg-inline--fa fa-linkedin "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div>
                <a href="https://github.com/akibiaons">
                  <div className="w-10 h-10">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      class="svg-inline--fa fa-github "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#888889] mb-6 font-semibold uppercase text-sm">
              Links
            </p>
            <div className="text-[#bfbfbf] flex flex-col items-center gap-4 mb-8 mt-4 text-xs">
              <p>Terms of service</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
    //
  );
};

export default Home;
