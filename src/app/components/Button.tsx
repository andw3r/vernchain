import clsx from "clsx";

interface ButtonProps {
  text: string;
  filled: boolean;
  large: boolean;
  classes?: string;
}

const Button = ({ text, filled, large, classes }: ButtonProps) => {
  return (
    <a
      href="#"
      className={clsx(
        "font-normal py-[14px] rounded-full transition-all duration-200",
        large ? "px-[40px]" : "px-[20px]",
        filled
          ? "text-grey bg-main hover:bg-[#c6ea62]"
          : "text-main border-main border-2 hover:text-grey hover:bg-main",
        classes
      )}
    >
      {text}
    </a>
  );
};

export default Button;
