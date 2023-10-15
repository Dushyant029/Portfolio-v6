import AchievementsCarousel from "./AchievementsCarousel";
import "../animations/animations.css";
import AniBody from "../animations/AniBody";
import AniTitle from "../animations/AniTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#091a28] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
      
        <AniTitle
          text={
            "MY OBJECTIVE IS FOR(INIT = LEARN, RUN >= DESIGN, FINALIZE = DEVELOPMENT++)"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#ffa590] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />
<h2 className="mb-10 text-[36px] text-[#ffa590] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        About
      </h2>
        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#ffa590] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AniBody
              text={
                "I am passionate about creating new Application Oriented solutions."
              }
            />
            <AniBody
              text={
                "Focusing on improving skills and gaining knowledge day by day. Looking forward to develop more valuable projects."
              }
              className={"hidden"}
            />
            <AniBody
              text={
                "I constantly want to produce something original and cutting-edge, whether I'm coding a sophisticated application or creating a slick user interface. I enjoy learning about new technologies and following the newest developments in the tech industry."
              }
            />
            <AniBody
              text={
                "I'm currently working on some amazing projects that I can't wait to tell you about. However, I am always interested in inventive possibilities and connections."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#ffa590]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AniTitle
                text={"Frameworks"}
                className={
                  "text-[24px] text-[#ffa590] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AniBody
                text={
                  "HTML, CSS, ReactJS, NextJS, JavaScript, NodeJS, ExpressJS, React Native"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AniTitle
                text={"Material Architecture"}
                className={
                  "text-[24px] text-[#ffa590] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AniBody
                text={
                  "AWS, Flask, Bootstrap, Firebase, RestAPI, GraphQL, GitHub, GitLab"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AniTitle
                text={"Creative Aids"}
                className={
                  "text-[24px] text-[#ffa590] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AniBody
                text={
                  "Adobe XD, Prototyping, Figma"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <AchievementsCarousel />
          <AniBody
            text="Couple of workshops I've completed and accolades I've won during my four academic years of college😜"
            className="absolute bottom-5 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#ffa590] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
