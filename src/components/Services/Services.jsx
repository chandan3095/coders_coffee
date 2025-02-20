import CustomText from "../../shared-components/CustomText/CustomText";
import { motion } from "framer-motion";
import { serviceData } from "../../data/data";

const Services = () => {
  const motionProps = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: {
      type: "spring",
      stiffness: 150,
      dumping: 10,
      delay: 0.2,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        dumping: 10,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <div className="container my-16 space-y-4">
      {/* header section  */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h3>
          <CustomText
            alternateText={true}
            currentText={"Fresh and"}
            orangeText={"Tasty Coffee"}
            animationProps={motionProps}
            fontSize={2}
          />
        </h3>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            dumping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          deleniti, dolor pariatur expedita porro enim aspernatur dolorem magnam
          quaerat voluptas vero ab sequi iure laboriosam quis quas corporis.
        </motion.p>
      </div>

      {/* service card section  */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {serviceData.map((item, index) => {
          return (
            <motion.div
              variants={cardVariants}
              key={index}
              className="text-center p-4 space-y-6"
            >
              <img
                src={item.image}
                className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              />

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-primary">
                  {item.title}
                </h4>
                <p className="text-gray-dark">{item.subTitle}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
