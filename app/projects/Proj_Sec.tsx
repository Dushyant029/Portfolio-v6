import ProjBoard from "./ProjBoard";

const Proj_Sec = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#091a28] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="projects"
    >
      {" "}
      <h2 className="mb-10 text-[36px] text-[#ffa590] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Highlighted Projects
      </h2>
      <ProjBoard />
    </section>
  );
};

export default Proj_Sec;
