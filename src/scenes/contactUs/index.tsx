import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `mx-auto w-full bg-lightgrey px-5 py-3 placeholder-white text-black`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto h-[60%] w-full bg-greygreen-1">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <div className="contentContainer">
          <div className="header flex justify-center pt-10 text-center font-montserrat text-[60px] font-semibold text-lightgrey">
            Let us know if you're interested
          </div>
          <div className="subtext mt-10 flex justify-center text-center font-montserrat text-[24px] tracking-[10px] text-lightgrey">
            you'll receive notifications about our company news and event
          </div>
          {/*Form*/}
          <div className="mt-10">
            <motion.div
              className="mt-10 flex basis-3/5 items-center justify-center md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/c6b36a8e2744ef9aea802783a514cd91"
                method="POST"
                className="w-2/4"
              >
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 block flex-col">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
                <button type="submit" className="bg-wheat px-20 py-2 text-greygreen mt-4">
                  SUBMIT
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <div className="footerContainer"></div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
