import background from '../assets/gym.gif';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay}
  }
})

const Homepage = () => {
  return (
    <div 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-white font-poppins px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' }}>

        <div className="text-center mb-8">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Welcome to Fithub Website👋
            </motion.h1>

            <motion.h2 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 bg-gradient-to-r from-blue-400 via-rose-500 to-black bg-clip-text text-transparent">
            FitHub - Set Workout Tracker
            </motion.h2>        
        </div>
    </div>
  );
}

export default Homepage;