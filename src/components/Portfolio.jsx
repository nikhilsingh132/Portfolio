import React from "react";
import teacherpool from "../assets/portfolio/teacherpool-logo.png";
import interviewschedulerlogo from "../assets/portfolio/interviewschedulerlogo .png";
import gymapp from "../assets/portfolio/gym.png";

const Portfolio = () => {


  const portfolios = [
    {
      id: 1,
      src: teacherpool,
      githublink: "https://github.com/nikhilsingh132/Teacher_Pool",
    },
    {
      id: 2,
      src: gymapp,
      githublink: "https://github.com/nikhilsingh132/GymApp",
    },
    {
      id: 3,
      src: interviewschedulerlogo,
      githublink: "https://github.com/Abhas-15/InterviewScheduler",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, githublink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-3 duration-200 hover:scale-105"
                  onClick={() => {
                    window.open(githublink, '_blank');
                  }}>
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;