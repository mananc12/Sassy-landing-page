import React from "react";

const Home = () => {
  return (
    <header
      id="home"
      className="bg-blue-500 text-white relative text-center py-16"
    >
      <div className="absolute wave w-full h-[143px] bottom-20 left-0"></div>
      <div className="mt-28 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold mb-4 slide-in">
          Welcome to{" "}
          <span className="text-blue-500 bg-white rounded-xl h-fit pl-1 pr-1">
            SaaSy
          </span>{" "}
          Company
        </h1>
        <p className="text-4xl mt-2 font-semibold">
          .....Transforming Ideas into Reality
        </p>
        <div className="flex flex-row justify-around items-center gap-5 text-2xl mb-10 mt-5 w-[70vw]">
          <img className="w-full h-[100%] pop-in" src="/home2.png" />
          <p className="w-full font-bold pop-in p-8 text-white border-soli border-2 rounded-xl">
            We provide cutting-edge SaaS solutions to propel your business
            forward. Explore a world of possibilities with our visionary
            approach and discover how we can turn your aspirations into tangible
            success stories.
          </p>
        </div>
        {/* <div className="border-dotted w-32 border-white border-t-[12px] mb-10 "></div> */}
        {/* <ArtisticGrid /> */}
      </div>
    </header>
  );
};

export default Home;
