"use client";
import clsx from "clsx";

interface SectionHeaderProps {
  textAlign?: "left" | "center";
  title: string;
  subtitle: string;
  desc?: string;
  headerClasses?: string;
}

const SectionHeader = ({
  textAlign = "left",
  title,
  subtitle,
  desc,
  headerClasses,
}: SectionHeaderProps) => {
  return (
    <header
      className={clsx(
        "flex-col",
        textAlign === "left" ? "text-left" : "text-center",
        headerClasses
      )}
    >
      <h3 className="uppercase text-main font-bold">{subtitle}</h3>
      <h2 className="mt-[6px] mb-[26px] text-white text-4xl font-bold">
        {title}
      </h2>
      {desc && <p className="text-silver text-lg">{desc}</p>}
    </header>
  );
};

export default SectionHeader;
