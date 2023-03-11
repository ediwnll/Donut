import { SelectedPage } from "@/shared/types";
import React from "react";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import curvyarrow from "@/assets/curvyarrow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1280px)");
  return (
    <section id="home" className="gap-1 py-10 h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="mx-auto w-5/6 items-center md:flex md:h-3/6"
      onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}>
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-8 font-archivo text-5xl font-semibold">
              Introducing the story of Donut
            </p>
            <p className="mt-8 text-2xl">Who hates donut? I assume no one</p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-4 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-wheat underline hover:text-wheat"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            ></AnchorLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
