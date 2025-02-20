import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";
import CustomText from "../../shared-components/CustomText/CustomText";

const QueryForm = () => {
  const motionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
      dumping: 10,
      delay: 0.2,
    },
  };
  return (
    <div className="container my-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section  */}
        <div className="scace-y-8">
          <CustomText
            currentText={"Buy Our Products"}
            orangeText={"From Anywhere"}
            animationProps={motionProps}
            fontSize={4}
            alternateText={true}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="input-style w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              className="input-style w-full"
            />
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
            }}
            className="primary-btn w-full"
          >
            Order Now
          </motion.button>
        </div>

        {/* map section  */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            src={WorldMap}
            alt="world-map.png"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default QueryForm;
