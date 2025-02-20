import { useState } from "react";
import BGImage from "../../assets/bg-slate.png";
import coffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { LiaFacebookF, LiaTwitter, LiaInstagram } from "react-icons/lia";

const bgImage = {
  backgroundImage: `url(${BGImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar section  */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content  */}
            <div className="text-neutral mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  dumping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  dumping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h4 className="text-2xl">Black Lifestyle Lovers,</h4>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem odit ipsa sit cupiditate eaque dolorum
                    incidunt nostrum harum provident possimus! Harum similique
                    pariatur animi debitis error cumque deleniti. Quo, quaerat?
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[300px] h-[220px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* image sec  */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  dumping: 10,
                  delay: 0.4,
                }}
                src={coffeeMain}
                alt="black.png"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* ring circle  */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  dumping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] z-10 rounded-full"
              ></motion.div>
              <div className="absolute -top-20 left-[160px] z-[1]">
                <motion.h3
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    dumping: 10,
                    delay: 0.8,
                  }}
                  className="text-[140px] scale-150 font-bold text-gray-dark/40 leading-none"
                >
                  Black Tumbler
                </motion.h3>
              </div>
            </div>

            {/* third sec  */}
            <div className="text-neutral mt-[100px] md:mt-0 p-4 space-y-28 hidden lg:block">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              {/* <div className="hidden lg:block"> */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  dumping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4 ">
                  <h4 className="text-2xl">Black Tumbler</h4>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem odit ipsa sit cupiditate eaque dolorum
                    incidunt nostrum harum provident possimus! Harum similique
                    pariatur animi debitis error cumque deleniti. Quo, quaerat?
                  </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[300px] h-[220px] bg-gray-dark/40"></div>
              </motion.div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* sidebar menu section  */}
      {sidebar && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primary-dark/80 backdrop-blur-sm z-50"
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6 text-white">
              <div className="w-[1px] h-[70px] bg-white"></div>
              {/* social icons  */}
              <div className="inline-block p-2 rounded-full border border-white cursor-pointer">
                <LiaFacebookF className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full border border-white cursor-pointer">
                <LiaTwitter className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full border border-white cursor-pointer">
                <LiaInstagram className="text-2xl" />
              </div>
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Hero;
