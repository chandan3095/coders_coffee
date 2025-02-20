import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomText from "../../shared-components/CustomText/CustomText";

const Navbar = ({ sidebar, setSidebar }) => {
  const motionProps = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.2,
    },
  };
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[9999]">
      <div className="container">
        <div className="flex justify-between items-center">
          <CustomText
            orangeText={"Coders"}
            currentText={"Coffee ."}
            isUppercase={true}
            animationProps={motionProps}
            fontSize={2}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              dumping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebar(!sidebar)}
          >
            <FaBars className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
