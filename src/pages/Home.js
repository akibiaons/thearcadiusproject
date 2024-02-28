import TypeWriterText from "../components/homeComponent/TypeWriter";

const Home = () => {
  return (
    <>
      {/* Hero Section part 1 */}
      <div className="flex flex-col min-h-screen items-center bg-gray-900">
        {/* div for layout */}
        <div className="absolute top-30 left-40 w-60 h-60 rounded-full bg-gradient-to-b from-[#52abc4] via-[#a7d575] to-[#37eaf7] blur-3xl opacity-50 scale-150">
          {/* The div for the blur and radiant */}
        </div>
        <div className="text-white mt-32 m-8">
          <div className="text-[#7feaff] font-mono">
            <TypeWriterText />
          </div>
          {/* The typewriter package can be used above to write out the dynamic text */}
          <div className="text-[1.4rem] mt-8 mb-6">
            <h1 className="text-5xl font-semibold mb-2">Arthur Fernandez.</h1>
            <h4 className="text-[#888889]">
              I design & build meaningful experiences.
            </h4>
          </div>
          <div>
            <p className="font-mono text-[#bfbfbf]">
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
      <div></div>
      {/* Part three is the about me */}
      <div></div>
      {/* Part 4 is technical skills */}
      <div></div>
      {/* Part 5 is the footer */}
      <div></div>
    </>
    //
  );
};

export default Home;
