import { motion } from "framer-motion";
import { ComputersCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      {/* ===== CENTERED TEXT ABOVE 3D CANVAS ===== */}
      <div className="absolute top-1/4 inset-x-0 mx-auto flex flex-col items-center text-center px-4 z-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
          Hi, I'm
        </h1>
        <h2 className="text-[#915EFF] text-5xl sm:text-6xl md:text-7xl font-extrabold mt-2">
          Waqar Shah
        </h2>
        <p className="text-white-100 text-sm sm:text-base md:text-lg mt-4 max-w-xl">
          I develop 3D visuals, user interfaces and web applications
        </p>
      </div>

      {/* ===== 3D CANVAS BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
