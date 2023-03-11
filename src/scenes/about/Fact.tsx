import { motion } from "framer-motion";
import React from "react";

type Props = {
  year: string;
  description: string;
};

const childVariant = {
  hidden: {opacity:0, scale:0.9},
  visible: {opacity:1, scale: 1}
}

const Fact = ({year, description}: Props) => {
  return <motion.div className="mt-6 flex flex-col w-[18rem] text-center"
  variants={childVariant}>
    <div className="bg-greygreen py-6 text-center align-middle font-montserrat font-extrabold text-[36px] text-lightgrey">{year}</div>
    <div className="text-greygreen flex w-5/6 justify-center self-center align-center mt-4">{description}</div>
  </motion.div>;
};

export default Fact;
