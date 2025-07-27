import React from "react";
// import { ProfileLinksBar } from "./custom/ProfileLinksBar";
import Summary from "./custom/Summary";
import { ProfileLinksAlternate } from "./custom/ProfileLinksAlternate";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <div className="font-montserrat text-5xl text-center font-semibold">
        Dev Reddy
      </div>
      {/* Social Links */}
      {/* <div className="mt-10">
        <ProfileLinksBar />
      </div> */}
      <div className="mt-10">
        <ProfileLinksAlternate />
      </div>
      {/* Mobile Hamburger Menu */}
      {/* <div className="md:hidden mt-4 flex justify-center">
          <ProfileLinksMobile />
        </div> */}
      <Summary />
    </header>
  );
};

export default Header;
