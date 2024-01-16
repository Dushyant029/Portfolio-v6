import Link from "next/link";
import { motion } from "framer-motion";
import AniBody from "../animations/AniBody";

const Foot_Sec = () => {
  const currentYear = new Date().getFullYear();
  const dateProp = `Copyright@${currentYear}`;

  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center border-t-2 border-[#ffa590]/30 bg-[#091a28] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#ffa590] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <AniBody text={dateProp} className={"m-0 p-0"} />
        <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
          <AniBody
            text={"Build with 😍 by"}
            className={"m-0 p-0"}
          />
          <Link
            href="https://github.com/Dushyant029"
            target="_blank"
            aria-label="Dushyant's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AniBody text={"K. Dushyant Reddy"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Foot_Sec;
