import ProjCard from "./ProjCard";
import { devProjects,ProjProps } from "./projDets";
import { useState } from "react";

const ProjBoard = () => {

  return (
    <>
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {devProjects.map((project: ProjProps) => (
            <ProjCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
    </>
  );
};

export default ProjBoard;
