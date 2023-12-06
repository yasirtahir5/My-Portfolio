import React from "react";
const Skills = () => {
  return (
    <div id="Skills">
      <section className="py-16 text-gray-800">
        <div className="container px-8 py-12 mx-auto ">
          <div className="text-center mb-10 mt-4">
            <h1
              className="text-5xl font-medium -mt-4 mb-6"
              style={{
                fontFamily: "AvantGard",
                background:
                  "linear-gradient(45deg,#b9c5ff, #04156D , #092197, #b9c5ff, #b9c5ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              <b>My Skills</b>
            </h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div
              className="p-4 w-full md:w-1/3 flex flex-col text-center items-center transition duration-300 
            ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gradient-to-br
   from-gray-600 to-blue-500 text-white mb-5 flex-shrink-0 shadow-lg"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-800 text-lg title-font font-medium mb-3"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>Javascript/Typescript</b>
                </h2>
                <div className="relative h-1 w-40 bg-gray-400 rounded-xl overflow-hidden">
                  <div className="absolute bg-gradient-to-br from-blue-950 to-blue-500 h-1 rounded-xl w-[100%]"></div>
                </div>
                <p className=" text-black text-right mt-2">
                  100%
                </p>
              </div>
            </div>

            <div
              className="p-4 w-full md:w-1/3 flex flex-col text-center items-center transition duration-300 
            ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full 
  bg-gradient-to-br from-blue-950 to-blue-500 text-white mb-5 flex-shrink-0 shadow-lg"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-800 text-lg title-font font-medium mb-3"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>Wordpress</b>
                </h2>
                <div className="relative h-1 w-44 bg-gray-700 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-br from-blue-950 to-blue-500"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <p className=" text-black text-right mt-2">
                  95%
                </p>
              </div>
            </div>
            <div
              className="p-4 w-full md:w-1/3 flex flex-col text-center items-center transition duration-300 
            ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full 
  bg-gradient-to-br from-gray-600 to-blue-500 text-white mb-5 flex-shrink-0 shadow-lg"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-800 text-lg title-font font-medium mb-3"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>Next Js</b>
                </h2>
                <div className="relative h-1 w-44 bg-gray-700 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-br from-blue-950 to-blue-500"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className=" text-black text-right mt-2">
                90%
                </p>
              </div>
            </div>
            <div
              className="p-4 w-full md:w-1/3 flex flex-col text-center items-center transition duration-300 
            ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full 
  bg-gradient-to-br from-gray-600 to-blue-500 text-white mb-5 flex-shrink-0 shadow-lg"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-800 text-lg title-font font-medium mb-3"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>C.S.S</b>
                </h2>
                <div className="relative h-1 w-44 bg-gray-700 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-br from-blue-950 to-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className=" text-black text-right mt-2">
                  90%
                </p>
              </div>
            </div>

            <div
              className="p-4 w-full md:w-1/3 flex flex-col text-center items-center transition duration-300 
            ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full 
  bg-gradient-to-br from-gray-600 to-blue-500 text-white mb-5 flex-shrink-0 shadow-lg"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-800 text-lg title-font font-medium mb-3"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>Python</b>
                </h2>
                <div className="relative h-1 w-44 bg-gray-700 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-br from-blue-950 to-blue-500"
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <p className=" text-black text-right mt-2">
                  65%
                </p>
              </div>
            </div>

            <div
              className="p-4 w-full md:w-1/3 flex flex-col text-center items-center transition duration-300 
            ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="w-20 h-20 inline-flex items-center justify-center rounded-full 
  bg-gradient-to-br from-gray-600 to-blue-500 text-white mb-5 flex-shrink-0 shadow-lg"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2
                  className="text-gray-800 text-lg title-font font-medium mb-3"
                  style={{ fontFamily: "AvantGard" }}
                >
                  <b>H.T.M.L</b>
                </h2>
                <div className="relative h-1 w-44 bg-gray-700 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-br from-blue-950 to-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className=" text-black text-right mt-2">
                  85%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
