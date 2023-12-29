import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface SliderButtonsProps {
  prevTestimonial: any;
  nextTestimonial: any;
}

const SliderButtons = ({
  prevTestimonial,
  nextTestimonial,
}: SliderButtonsProps) => {
  return (
    <div className="flex space-x-6">
      <button
        onClick={prevTestimonial}
        className="rounded-full text-main border-2 border-main w-[48px] h-[48px] flex justify-center items-center hover:bg-main hover:text-black"
      >
        <MdArrowBackIos />
      </button>
      <button
        onClick={nextTestimonial}
        className="rounded-full text-main border-2 border-main w-[48px] h-[48px] flex justify-center items-center hover:bg-main hover:text-black"
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SliderButtons;
