/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef, useState } from "react";

let tween: any;

export default function Basics() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".herman", {
      duration: 3,
      x: "-30vw",
      rotation: -360,
      ease: "linear",
      //   scrollTrigger: ".herman", // this says, whenever this element is in view we start this animation
      scrollTrigger: {
        trigger: ".herman",
        toggleActions: "restart pause reverse reset", //onEnter onLeave onEnterBack onLeaveBack
        markers: true,
        start: "top 75%", // when the top of herman passes the 75% of the screen
        end: "bottom 25%",
      },
    });

    // the trigger can be any element, it doensn't have to be the target of the animation.
  }, []);

  return (
    <div>
      <div className="h-screen bg-orange-700">
        {" "}
        <span>scroll trigger basics</span>
      </div>
      <div className="h-screen bg-sky-300 flex justify-center">
        {" "}
        <img
          className="w-32 herman h-32"
          src="/images/monster.png"
          alt="monster"
        />
      </div>
      <div className="h-screen bg-rose-500"></div>
    </div>
  );
}
