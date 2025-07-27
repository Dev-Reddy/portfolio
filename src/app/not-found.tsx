import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      The page you are looking for does not exist. Please go back to the
      <Link href="/" className=" ml-2 underline font-semibold">
        {" "}
        home page
      </Link>
    </div>
  );
};

export default NotFound;
