// "use client"

// import Link from "next/link";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <div>
//       <motion.nav
//         className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-blue-
//         border-opacity-40 bg-blue-950 bg-opacity-90 shadow-lg shadow-blue-950/[0.03] backdrop-blur-[0.5rem] 
//         sm:top-6 sm:h-[2.50rem] sm:w-[30rem] sm:rounded-full flex justify-center px-4 mt-6 bg-blue-950"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       >
//         <nav className="flex justify-between items-center gap-10">
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link href={"#Home"} className="text-white mr-6 hover:text-gray-500">Home
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link href={"#About"} className="text-white mr-6 hover:text-gray-500">About
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link href={"#Skills"} className="text-white mr-6 hover:text-gray-500">Skills
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link href={"#Contactus"} className="text-white mr-6 hover:text-gray-500">Contact
//             </Link>
//           </motion.div>
//         </nav>
//       </motion.nav>
//     </div>
//   );
// };

// export default Navbar;
"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="fixed top-0 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center 
          bg-gradient-to-r from-blue-950 via-blue-900 to-blue-600
          rounded-full p-2">
           
            <Link href="#Home"
                onClick={() => handleLinkClick("Home")}
                className={`mr-7 ml-10 text-gray-400 hover:text-gray-200 font-semibold transition duration-300 ${
                  activeLink === "Home" ? "border-b-2 border-white" : ""
                }`}
              >
                Home
            </Link>
            <Link href="#About"
                onClick={() => handleLinkClick("About")}
                className={`mr-7 text-gray-400 hover:text-gray-200 font-semibold transition duration-300 ${
                  activeLink === "About" ? "border-b-2 border-white" : ""
                }`}
              >
                About
            </Link>
            <Link href="#Skills"
                onClick={() => handleLinkClick("Skills")}
                className={`mr-7 text-gray-400 hover:text-gray-200 font-semibold transition duration-300 ${
                  activeLink === "Skills" ? "border-b-2 border-white" : ""
                }`}
              >
                Skills
            </Link>
            <Link href="#Contactus"
                onClick={() => handleLinkClick("Contactus")}
                className={` mr-10 text-gray-400 hover:text-gray-200 font-semibold transition duration-300 ${
                  activeLink === "Contactus" ? "border-b-2 border-white" : ""
                }`}
              >
                Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
