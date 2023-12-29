import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface SliderContentProps {
  testimonialsData: any;
  currentTestimonial: any;
}

const SliderContent = ({
  testimonialsData,
  currentTestimonial,
}: SliderContentProps) => {
  return (
    <motion.div
      className="lg:mt-20 xs:mt-15"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaQuoteLeft className="text-2xl text-main mr-2" />
      <p className="text-lg text-silver px-[20px]">
        {testimonialsData[currentTestimonial].desc}
      </p>
      <FaQuoteRight className="text-2xl text-main ml-2 float-right" />

      <p className="text-lg text-white mt-[32px]">
        <span className="font-bold">
          {testimonialsData[currentTestimonial].author}
        </span>
        <span className="px-4 font-bold">/</span>
        <span> Lorem ipsum dolor</span>
      </p>
    </motion.div>
  );
};

export default SliderContent;
