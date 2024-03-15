import TypeWriterText from "../components/homeComponent/TypeWriter";
// import FeaturedProjects from "../components/homeComponent/FeaturedProjects";
import ProjectCard from "../components/homeComponent/FeaturedProjects";
import ProjectCard2 from "../components/homeComponent/FeaturedTwo";
import AboutCard from "../components/homeComponent/AboutCard";
// import FeaturedTwo from "../components/homeComponent/FeaturedTwo";
// import FeaturedProjects from "../components/3DComponent/FeaturedProjects3D";

const Home = () => {
  return (
    <>
      {/* Hero Section part 1 below */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-radial blur-3xl opacity-50 scale-150 z-0">
        {/* The div for the blur and radiant */}
      </div>
      <div className="flex flex-col min-h-screen items-center bg-gray-900 lg:flex lg:flex-col lg:w-[100%]">
        {/* div for layout */}
        <div className="text-white mt-32 m-8 lg:w-[65%]">
          <div className="text-[#7feaff] font-mono">
            <TypeWriterText />
          </div>
          {/* The typewriter package can be used above to write out the dynamic text */}
          <div className="text-[1rem] mt-4 mb-6">
            <h1 className="text-4xl font-semibold mb-2">Arthur Fernandez.</h1>
            <h4 className="text-[#888889] text-4xl leading-[3rem] font-semibold">
              I design & build meaningful experiences.
            </h4>
          </div>
          <div>
            <p className="font-mono text-[#bfbfbf] text-sm leading-2">
              I'm a digital polymath - a constantly evolving digital creator
              driven by a passion for livelong learning and the desire to build
              and leave a lasting impact.
            </p>
          </div>
        </div>
        <div className="flex justify-start align-start">
          <div className="bg-[#7feaff] rounded-full p-2 px-4 mr-8">
            <button>Contact me</button>
          </div>
          <div className="border-2 border-dotted text-[#bfbfbf] rounded-full p-2 px-4">
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
          <h2 className="text-4xl font-semibold text-[#bfbfbf] mb-6">
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
      <div className="relative bg-gray-950 flex flex-col min-h-screen">
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
        <div className="mx-auto w-[90%] pb-20 mt-20">
          <div>
            <AboutCard />
          </div>
          <div className="mt-12">{/* <ProjectCard2 /> */}</div>
        </div>
      </div>
      {/* Part 4 is technical skills */}
      <div>
        <div>Technical skillz</div>
      </div>
      {/* Part 5 is the footer */}
      <div>
        <div>footer?? For home page</div>
      </div>
    </>
    //
  );
};

export default Home;
