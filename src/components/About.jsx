import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-10">
            I'm a fourth-year Electronics Engineering student at IIT BHU, currently immersing myself in the dynamic domains of full-stack web development and data science. My third-year internship at Mathworks focused on Simulink block development using Matlab, providing hands-on experience in cutting-edge technology. Securing a full-time offer from Navi Technologies has further fueled my passion for honing skills and contributing to innovative projects on a broader scale.
          </p>

          <br />

          <p className="text-xl">
            Beyond the realm of technology, cricket is both a source of joy and active engagement for me, whether I'm watching or playing. My love for anime serves as a creative outlet and a constant source of inspiration. With a reputation for consistent dedication and a balanced approach to life, I bring a strong work ethic to every aspect of my journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;