import { motion } from "framer-motion";

const Path = ({ openPath, closedPath, ...rest }: any) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      variants={{
        open: { d: openPath, transition: { duration: 0.3 } },
        closed: { d: closedPath, transition: { duration: 0.3 } },
      }}
      {...rest}
    ></motion.path>
  );
};

interface ToggleButtonProps {
  toggle: () => void;
}

const ToggleButton = ({ toggle }: ToggleButtonProps) => {
  return (
    <button
      onClick={toggle}
      className="md:hidden z-50 border-0 outline-none focus:outline-none absolute top-[25px] right-[25px] w-[50px] h-[50px] rounded-full"
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        className="absolute top-[28%] right-[28%]"
      >
        <Path openPath="M 3 16.5 L 17 2.5" closedPath="M 2 2.5 L 20 2.5" />
        <Path closedPath="M 2 9.423 L 20 9.423" openPath="" />
        <Path
          closedPath="M 2 16.346 L 20 16.346"
          openPath="M 3 2.5 L 17 16.346"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
