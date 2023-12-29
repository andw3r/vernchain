import Image from "next/image";
import pic from "@/app/assets/imgs/NavLogo/logo-pic.svg";
import text from "@/app/assets/imgs/NavLogo/logo-text.svg";

const Logo = () => {
  return (
    <div className="flex cursor-pointer">
      {/* mobile */}
      <div className="mr-[12px] flex">
        <Image
          alt="logo"
          src={pic}
          style={{
            maxWidth: "none",
          }}
        />
      </div>

      {/* desktop */}
      <div className="xs:hidden lg:flex">
        <Image alt="logo" src={text} />
      </div>
    </div>
  );
};

export default Logo;
