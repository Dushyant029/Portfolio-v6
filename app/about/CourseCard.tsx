import Image from "next/image";
import { CourseProps } from "./courseDets";
import Link from "next/link";

const CourseCard = ({ title, source, image, link }: CourseProps) => {
  return (
    <Link href={link} target="_blank" aria-label="Check out my achieves on Web">
      <div className={`relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]`}>
        <Image
          src={image}
          alt={title}
          className="w-full items-stretch justify-center rounded-xl bg-cover bg-center"
        />
        <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-50 text-white rounded-b-xl">
          <p className="text-xs">{source}</p>
          <h4 className="text-sm">{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
