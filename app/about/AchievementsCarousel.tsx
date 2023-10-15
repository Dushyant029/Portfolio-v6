import CourseCard from "./CourseCard";
import { courses, CourseProps } from "./courseDets";
import "../animations/animations.css";

const AchievementsCarousel = () => {
  return (
    <div className="animate absolute bottom-5 flex w-[1100%] border-[1px] border-[#091a28] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {courses.map((cor: CourseProps, index) => (
          <CourseCard
            key={index}
            title={cor.title}
            source={cor.source}
            image={cor.image}
            link={cor.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {courses.map((cor: CourseProps, index) => (
          <CourseCard
            key={index}
            title={cor.title}
            source={cor.source}
            image={cor.image}
            link={cor.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel;
