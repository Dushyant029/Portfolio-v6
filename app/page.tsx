"use client";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import Loader from "./animations/Loader/Loader";
import { initialBlobityOptions } from "./background/bgConfig";
import Hero_Sec from "./hero/Hero_Sec";
import Nav_Sec from "./nav/Nav_Sec";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./about/About_Sec"));
const Projects = dynamic(() => import("./projects/Proj_Sec"));
const Experience = dynamic(() => import("./experience/Exp_Sec"));
const Contact = dynamic(() => import("./contact/Contact_Sec"));
const Footer = dynamic(() => import("./footer/Foot_Sec"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <Loader />

      <Nav_Sec />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero_Sec />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
