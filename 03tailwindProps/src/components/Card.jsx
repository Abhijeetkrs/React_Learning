// import React from 'react'

function Card({title, subtitle ="default"}) {
    // console.log(props);
    console.log(title);
    
    
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-400 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"></div>

          <div className="relative">
            <div className="absolute -top-12 left-0 px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-sm text-white">
              14th April 2024 - Present
            </div>

            <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
               {/* {subtitle || "default" }   issues in code readability  */ } 
                {subtitle}

            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Your card description goes here. Add any content you want to
              display.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-gray-300">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer">
                Tag 1
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer">
                Tag 2
              </span>
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer">
                Tag 3
              </span>
            </div>

            <div className="flex-row md:flex-col space-y-3 gap-10">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 hover:opacity-90 transition-opacity text-white"
              >
                Visit Site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="group-hover:rotate-12 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:border-pink-500 transition-colors text-white"
              >
                Certificate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:rotate-12 transition-transform duration-300"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
