import { DonutType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Picture } from "./pictureData";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: Props) => {
  const [popupcontent, setpopupcontent] = useState([]);
  const [popuptoggle, setpopuptoggle] = useState(false);
  const changeContent = (donutPicture: any) => {
    setpopupcontent([donutPicture]);
    setpopuptoggle(!popuptoggle);
  };
  return (
    <section id="gallery" className="min-h-full w-full bg-greygreen-50 py-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
        <div className="flex justify-center font-montserrat text-[64px] font-semibold text-lightgrey">
          <p>Donut Gallery</p>
        </div>
        <div className="mt-8 flex justify-center font-montserrat text-2xl tracking-[20px] text-lightgrey">
          HALL OF FAME
        </div>
        <motion.div
          className=" my-10 gap-8 bg-lightgrey-50 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/*Donut images */}
          {Picture.map((donutPicture) => {
            return (
              <div className="my-10 flex flex-1 flex-col items-center justify-center py-10">
                <div
                  className="h-[200px] w-[200px]"
                  onClick={() => changeContent(donutPicture)}
                >
                  <img src={donutPicture.image} alt="picture" />
                </div>
                <div className="mt-4 w-5/6 text-center text-wheat">
                  {donutPicture.product}
                </div>
              </div>
            );
          })}
        </motion.div>
        {popuptoggle && (
          <motion.div
            className="popUpContainer fixed inset-0 bg-black bg-opacity-50 pt-[15%]"
            onClick={changeContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="popUpBody m-auto h-[50%] w-[50%] rounded-lg bg-greygreen p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popUpHeader w-full text-right">
                <button
                  className="mt-[-34px] text-[28px]"
                  onClick={changeContent}
                >
                  x
                </button>
              </div>
              <div className="popUpContent">
                {popupcontent.map((pop) => {
                  return (
                    <div className="popUpCard">
                      <p className="mb-10 text-xl">{pop.product}</p>
                      <p>{pop.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Gallery;
