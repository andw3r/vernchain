import { AnimatePresence, motion } from "framer-motion";
import guyPic from "@/app/assets/imgs/guy.png";
import Image from "next/image";

interface SliderImageProps {
  key: number;
}

const SliderImage = ({ key }: SliderImageProps) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={guyPic} alt="Testimonial" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SliderImage;
