import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AniWord from "../animations/AniWord";
import profile from "../../public/profile.jpeg";

const Hero_Sec = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#091a28] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://drive.google.com/file/d/1Ff2q5b1bhokJdU1bxJMMk7l6B_MTBYDp/view"
            target="_blank"
            aria-label="View Resume"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#ffa590] py-2 px-4 text-[14px] font-semibold text-[#ffa590] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              VIEW RESUME
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#ffa590] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://www.linkedin.com/kdushyantreddy/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#ffa590] md:text-[16px]"
              variants={bodyAnimation}
            >
              LI
            </motion.p>
          </Link>
          <Link
            href="https://github.com/Dushyant029"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#ffa590] md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.credly.com/users/kdushyantreddy"
            target="_blank"
            aria-label="View Credly Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#ffa590] md:text-[16px]"
              variants={bodyAnimation}
            >
              CD
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}   `}
        >
          <AniWord
            title="K.DUSHYANT REDDY"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-135px] md:bottom-[-130px] lg:bottom-[-180px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Dushyant's pic"
              data-blobity-tooltip="A Geek"
              data-blobity-invert="false"
              className=" w-[170px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#ffa590] md:text-[20px] lg:text-left">
            Aspiring Software Engineer and AWS Cloud Intern, presently at{" "}
            <Link
              href="https://www.cloudplusai.tech/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="CloudplusAI Website"
            >
              CloudplusAI.
            </Link>
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-center text-[16px] font-medium text-[#ffa590] md:text-[20px] lg:text-right">
          Learning new sets of softwares and skills.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero_Sec;
