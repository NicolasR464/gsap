"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Hover() {
  useEffect(() => {
    const items = document.querySelectorAll(".sec");
    console.log(items);

    items.forEach((item, i) => {
      const tl = gsap
        .timeline({ paused: true })
        .to(
          item.querySelector(".txt"),

          {
            color: "coral",
            rotate: 360,
            ease: "back",
            duration: 1,
            yoyo: true,
          }
        )
        .to(
          item.querySelector(".dot"),
          { backgroundColor: "green", scale: 1.5 },
          0
        );

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  //   onMouseEnter={() => {
  //     tl.play();
  //   }}
  //   onMouseLeave={() => {
  //     tl.reverse();
  //   }}

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <section className="sec flex items-center">
        {" "}
        <div className="dot m-2"></div>
        <h1 className="txt p-5 text-3xl">HOVER#1</h1>
      </section>
      <section className="sec flex items-center">
        {" "}
        <div className="dot m-2"></div>
        <h1 className="txt p-5 text-3xl">HOVER#2</h1>
      </section>
      <section className="sec flex items-center">
        {" "}
        <div className="dot m-2"></div>
        <h1 className="txt p-5 text-3xl">HOVER#3</h1>
      </section>
      <section className="sec flex items-center">
        {" "}
        <div className="dot m-2"></div>
        <h1 className="txt p-5 text-3xl">HOVER#4</h1>
      </section>
    </div>
  );
}
