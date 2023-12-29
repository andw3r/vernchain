import Image from "next/image";
import pic from "@/app/assets/imgs/NavLogo/logo-pic.svg";
import text from "@/app/assets/imgs/NavLogo/logo-text.svg";

// icons imports
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const footerNav = ["Home", "About", "Services", "Price", "News"];
  const icons = [FaWhatsapp, FaXTwitter, FaFacebookF, FaInstagram];

  return (
    <footer className="bg-grey border-t border-main">
      <div className="container pt-10">
        <div className="flex xs:flex-col sm:flex-row justify-between mb-14">
          <div className="max-w-[415px]">
            <div className="flex cursor-pointer items-center">
              <div className="mr-[12px] flex">
                <Image
                  alt="logo"
                  src={pic}
                  style={{
                    maxWidth: "none",
                  }}
                />
              </div>

              <div className="">
                <Image alt="logo" src={text} />
              </div>
            </div>

            <p className="text-silver text-lg mt-6">
              Lorem ipsum dolor sit amet consectetur. Fusce nisl lacus elementum
              neque.
            </p>
          </div>

          <div className="flex flex-col justify-end xs:mt-4 sm:mt-0">
            <h6 className="text-white text-xl font-medium mb-6">Contact Us</h6>

            <span className="text-silver text-lg">(524) 333 6565</span>
            <span className="text-silver text-lg">example@email.com</span>
          </div>
        </div>

        <div className="flex xs:flex-col lg:flex-row justify-between items-center ">
          <div className="xs:hidden sm:flex justify-between w-2/3 cursor-pointer">
            {footerNav.map((item) => (
              <h6 key={item} className="text-white text-xl font-medium">
                {item}
              </h6>
            ))}
          </div>

          <div className="flex gap-5">
            {icons.map((item, index) => {
              const Icon = icons[index];

              return (
                <span
                  key={index}
                  className="bg-main w-12 h-12 flex justify-center items-center rounded-full text-2xl cursor-pointer"
                >
                  <Icon />
                </span>
              );
            })}
          </div>
        </div>

        <div className="bg-[#D9D9D9] w-full h-[1px] mt-5 mb-4" />

        <div className="flex justify-between text-white text-lg">
          <span>© 2023 Vernchain Template • All Rights Reserved</span>
          <div className="flex gap-10">
            <span>Terms</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
