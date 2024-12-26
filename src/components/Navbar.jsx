import { useState } from 'react';
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
import logo from '../assets/fithub_logo.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full text-blue-600 z-50 font-poppins bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Logo" className="h-12" />
            </a>
          </div>
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12 text-lg lg:text-2xl">
            <a href="#home" className="hover:text-red-600 font-bold duration-300">Home</a>
            <a href="#terms" className="hover:text-red-600 font-bold duration-300">Terms & Condition</a>
            <a href="#help" className="hover:text-red-600 font-bold duration-300">Help</a>
            <a href="#feedback" className="hover:text-red-600 font-bold duration-300">Feedback</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="focus:outline-none">
              {navOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 text-lime-400 text-lg absolute w-full left-0 top-20 z-40 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" className="hover:text-red-600 font-bold duration-300">Home</a>
            <a href="#terms" className="hover:text-red-600 font-bold duration-300">Terms & Condition</a>
            <a href="#help" className="hover:text-red-600 font-bold duration-300">Help</a>
            <a href="#feedback" className="hover:text-red-600 font-bold duration-300">Feedback</a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
