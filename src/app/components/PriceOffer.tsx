import clsx from "clsx";
import Button from "./Button";
import { MdCheck } from "react-icons/md";

interface PriceOfferProps {
  subtitle: string;
  title: string;
  desc: string;
  including: string[];
  filled?: boolean;
}

const PriceOffer = ({
  subtitle,
  title,
  desc,
  including,
  filled,
}: PriceOfferProps) => {
  return (
    <article
      className={clsx(
        "xs:w-full sm:w-[355px] h-[528px] rounded-normal text-center",
        filled ? "bg-main text-black" : "bg-black border-main border-2"
      )}
    >
      <div className="relative flex flex-col justify-between w-full h-full py-[40px] px-[36px]">
        <div>
          <h6
            className={clsx(
              "text-xl font-bold",
              filled ? "text-black " : "text-white"
            )}
          >
            {subtitle}
          </h6>
          <h5
            className={clsx("mt-[20px]", filled ? "text-black " : "text-white")}
          >
            <span className="text-4xl font-bold"> {title}</span> / prj
          </h5>
          <p
            className={clsx(filled ? "text-grey " : "text-silver", "my-[20px]")}
          >
            {desc}
          </p>

          {including.map((item) => (
            <div
              key={item}
              className="flex justify-center font-normal text-silver text-base gap-2"
            >
              <div className={clsx("pr-2", filled ? "text-grey" : "text-main")}>
                <MdCheck />
              </div>
              <div className={clsx(filled ? "text-grey " : "text-silver")}>
                {item}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            filled={false}
            large={true}
            text="Get Started"
            classes="bg-black hover:!bg-grey hover:text-main"
          />
        </div>
      </div>
    </article>
  );
};

export default PriceOffer;
