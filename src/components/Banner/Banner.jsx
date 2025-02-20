import { motion } from "framer-motion";
import bannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import CustomText from "../../shared-components/CustomText/CustomText";

const Banner = () => {
  const BannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

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
    <div className="container my-14">
      <div
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        style={BannerStyle}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto text-center">
            {/* <h3 className="text-2xl text-center sm:text-4xl font-semibold">
              Download The App
            </h3> */}
            <CustomText
              currentText={"Download The"}
              orangeText={"App"}
              fontSize={2}
              alternateText={true}
              animationProps={motionProps}
            />
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                dumping: 10,
                delay: 0.3,
              }}
              className="sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ex illum non?
            </motion.p>

            {/* image link  */}
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:ma-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    dumping: 10,
                    delay: 0.4,
                  }}
                  src={AppStoreImg}
                  alt="app_store"
                />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:ma-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    dumping: 10,
                    delay: 0.4,
                  }}
                  src={PlayStoreImg}
                  alt="play_store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
