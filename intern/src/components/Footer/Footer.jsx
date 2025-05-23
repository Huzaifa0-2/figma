import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-neutral-950 h-auto sm:h-100 flex flex-col items-center py-8 sm:py-12 md:py-16" id="footer">
        <h1 className="py-6 sm:py-8 md:py-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">
          Find Me On
        </h1>

        <div className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 mt-4 sm:mt-6 rounded-2xl flex flex-col items-center justify-center gap-3 sm:gap-4 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.2),inset_0_0_5px_rgba(255,255,255,0.3),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-500 hover:bg-[rgba(173,173,173,0.05)] p-4 sm:p-6">
          <ul className="p-2 sm:p-4 flex list-none gap-4 sm:gap-8 md:gap-12 lg:gap-15 items-center justify-center flex-wrap flex-row">
            {/* GitHub */}
            <a href="https://github.com/Huzaifa0-2" target="_blank" rel="noopener noreferrer">
              <li className="group relative cursor-pointer transition-all duration-500">
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-20"></span>
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-2 group-hover:-translate-y-2"></span>
                <svg
                  className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] p-2 sm:p-3 md:p-4 rounded-full text-[#ffae00] fill-current shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <div className="opacity-0 rounded-md p-1 transition-all duration-300 absolute z-[9999] text-[#ffae00] bg-[rgba(255,255,255,0.3)] shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.08)] group-hover:opacity-100 group-hover:translate-x-4 sm:group-hover:translate-x-6 group-hover:-translate-y-0.5 group-hover:skew-x-[-5deg] text-xs sm:text-sm">
                  GitHub
                </div>
              </li>
            </a>

            {/* LinkedIn */}
            <a href="https://pk.linkedin.com/in/s-m-huzaifa-riaz-23421b292?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">
              <li className="group relative cursor-pointer transition-all duration-500">
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-20"></span>
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-2 group-hover:-translate-y-2"></span>
                <svg
                  className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] p-2 sm:p-3 md:p-4 rounded-full text-[#ffae00] fill-current shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <div className="opacity-0 rounded-md p-1 transition-all duration-300 absolute z-[9999] text-[#ffae00] bg-[rgba(255,255,255,0.3)] shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.08)] group-hover:opacity-100 group-hover:translate-x-4 sm:group-hover:translate-x-6 group-hover:-translate-y-0.5 group-hover:skew-x-[-5deg] text-xs sm:text-sm">
                  LinkedIn
                </div>
              </li>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/923128215065?text=Hey%20there!%20I%20just%20saw%20your%20portfolio%20and%20I'd%20love%20to%20know%20more%20about%20your%20work.%20Are%20you%20available%20for%20a%20chat%3F" target="_blank" rel="noopener noreferrer">
              <li className="group relative cursor-pointer transition-all duration-500">
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-20"></span>
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                <span className="opacity-0 absolute h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-2 group-hover:-translate-y-2"></span>
                <svg
                  className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] p-2 sm:p-3 md:p-4 rounded-full text-[#ffae00] fill-current shadow-[inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.16)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <div className="opacity-0 rounded-md p-1 transition-all duration-300 absolute z-[9999] text-[#ffae00] bg-[rgba(255,255,255,0.3)] shadow-[-5px_0_1px_rgba(153,153,153,0.2),-10px_0_1px_rgba(153,153,153,0.2),inset_0_0_20px_rgba(255,255,255,0.3),inset_0_0_5px_rgba(255,255,255,0.5),0_5px_5px_rgba(0,0,0,0.08)] group-hover:opacity-100 group-hover:translate-x-4 sm:group-hover:translate-x-6 group-hover:-translate-y-0.5 group-hover:skew-x-[-5deg] text-xs sm:text-sm">
                  WhatsApp
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="bg-black text-center py-3 sm:py-4">
        <p className="text-xs sm:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SMHR. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;