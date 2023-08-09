"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

let tl: any;
export default function Hover() {
  useEffect(() => {
    tl = gsap
      .timeline({ paused: true })
      .to(
        ".txt",

        {
          color: "coral",
          rotate: 360,
          ease: "back",
          duration: 1,
          yoyo: true,
        }
      )
      .to(".dot", { backgroundColor: "green", scale: 1.5 }, 0);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="dot m-2"></div>
      <h1
        onMouseEnter={() => {
          tl.play();
        }}
        onMouseLeave={() => {
          tl.reverse();
        }}
        className="txt p-5 text-3xl"
      >
        HOVER
      </h1>
    </div>
  );
}
