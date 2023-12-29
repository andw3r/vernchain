"use client";
import clsx from "clsx";

interface NewsSwitchProps {
  onClick: any;
  active: boolean;
}

const NewsSwitch = ({ active, onClick }: NewsSwitchProps) => {
  return (
    <span
      onClick={onClick}
      className={clsx(
        "border-2 border-main w-4 h-4 rounded-normal cursor-pointer shadow-main shadow-sm",
        active && "bg-main"
      )}
    ></span>
  );
};

export default NewsSwitch;
