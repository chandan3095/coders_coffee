import { motion } from "framer-motion";

const CustomText = ({
  orangeText,
  currentText,
  isUppercase = false,
  alternateText = false,
  animationProps,
  fontSize,
}) => {
  return (
    <div>
      <motion.h3
        {...animationProps}
        className={`text-${fontSize}xl font-semibold ${
          isUppercase ? "uppercase" : "normal-case"
        }`}
      >
        {alternateText ? (
          <>
            {currentText}
            <span className="text-primary"> {orangeText}</span>
          </>
        ) : (
          <>
            <span className="text-primary">{orangeText} </span>
            {currentText}
          </>
        )}
      </motion.h3>
    </div>
  );
};

export default CustomText;
