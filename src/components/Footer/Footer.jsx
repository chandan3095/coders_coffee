import { FaPhoneAlt, FaFacebook, FaTelegram, FaGoogle } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark pt-12 pb-6 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold uppercase">Coders Cafe</h2>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus corporis dolor in.Lorem ipsum dolor sit, amet
              consectetur adipisicing elit.
            </p>

            <div>
              <p className="flex items-center gap-2">
                <FaPhoneAlt />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaLocationDot />
                Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* footer links  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>

              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </motion.div>

          {/* social links  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Follow Us</h2>

            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <AiFillInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment Methods</h2>
              <img src={CreditCards} alt="credit-cards" className="w-[80%] " />
            </div>
          </motion.div>
        </div>

        {/* copyright sec  */}
        <p className="text-white text-center mt-8 pt-6 border-t-2">
          Copyright &copy; 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
