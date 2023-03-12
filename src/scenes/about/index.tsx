import ActionButton from "@/shared/ActionButton";
import { FactType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Fact from "./Fact";

const facts: Array<FactType> = [
  {
    year: "1808",
    description: `One of the earliest known literary usages of the term dates to an
  1808 short story describing a spread of "fire-cakes and
  dough-nuts"`,
  },
  {
    year: "1950",
    description:
      "Dunkin' Donuts is the largest donut chain, with 11,000 stores in 33 countries.",
  },
  {
    year: "2023",
    description:
      "The simple, sweet taste of a glazed donut is a classic that has been enjoyed for generations. The combination of a fluffy, soft dough and a sugary glaze is irresistible to many people and crown as the most popular donut",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className=" bg-lightgrey py-20">
      <motion.div
        className="mx-auto flex w-4/6 flex-col items-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 flex justify-center font-montserrat text-[64px] font-semibold text-greygreen">
          <p>About Donuts</p>
        </div>
        <div className="mt-8 flex justify-center font-montserrat text-2xl tracking-[20px] text-greygreen">
          SOME HISTORY
        </div>
        <div className="text-l mt-10 flex justify-center text-center font-montserrat text-greygreen">
          Fun fact: The hole in the center of donut is there to help it cook
          more evenly.
        </div>
        {/*Facts */}
        <motion.div
          className="mt-5 justify-between gap-10 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {facts.map((fact: FactType) => (
            <Fact
              key={fact.year}
              year={fact.year}
              description={fact.description}
            />
          ))}
        </motion.div>
        <div className="mt-16 flex justify-center">
          <ActionButton setSelectedPage={setSelectedPage}>
            SEE MORE
          </ActionButton>
        </div>
      </motion.div>
    </section>
  );
};
export default About;
