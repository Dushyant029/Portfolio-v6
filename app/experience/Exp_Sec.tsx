import ExpCard from "./ExpCard";
import { expDets } from "./expDets";

const Exp_Sec = () => {
  return (
    <section id="experience" className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <h2 className="mb-10 text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Experiences
      </h2>
      </div>
      <div className="grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-1 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-2">
        {expDets.map((exp, index) => {
          return (
            <ExpCard
              key={index}
              title={exp.title}
              image={exp.image}
              url={exp.url}
              date={exp.date}
              available={exp.available}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Exp_Sec;
