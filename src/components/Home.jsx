import React from 'react';
import { motion } from 'framer-motion';

const sentence = 'We only teach what we are really really good at.';

const Home = () => {
  return (
    <div className="w-full max-w-[800px] px-4 py-20 mx-auto text-center bg-transparent text-black min-h-[500px] flex flex-col justify-center items-center">
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7 }}
      >
        {sentence}
      </motion.p>

      <div className="mt-10">
        <a
          href="/Courses"
          className="bg-black text-white rounded-lg px-4 py-2 text-sm sm:text-base font-poppins"
        >
          Check Courses - Make an Impact
        </a>
      </div>
    </div>
  );
};

export default Home;
