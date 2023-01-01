import React from "react";
import Slider from "../../components/Slider/Slider";
import Featured from "../../components/Featured/Featured";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import { motion } from "framer-motion";


function Home() {
  return (
    <motion.div animate={{x:[-60,0]}} className="">
      <Slider />
      <Featured type="Featured Products" />
      <Categories/>
      <Featured type="Trending Products" />
      <Contact/>
      
    </motion.div>
  );
}

export default Home;
