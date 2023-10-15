import React from "react";
import Link from "next/link";
import Image from "next/image";

const err404 = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#091a28] text-[#ffa590] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">Error </p>
      <Image
        src="https://raw.githubusercontent.com/Dushyant029/Images/a2b63a357dca94009403e820ab6f00e3bece9b0e/error.jpg"
        alt="404"
        width={858}
        height={483}
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
      />
      <div>
        <Link href="/" className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default err404;
