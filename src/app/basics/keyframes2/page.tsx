/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";

import { useEffect, useRef, useState } from "react";

let tl: any;
let animation: any;
export default function Keyframes() {
  useEffect(() => {
    tl = gsap.timeline();

    const monster = document.querySelector(".item");

    //NOTE: when we set an animation to repeat itself we double its duration
    //Here the second tween is ending after the second tween ends
    //to make sure a tween plays after the previous finishes, we add: ">"

    animation = tl
      .fromTo(
        ".hole",
        { scale: 0, repeat: 1, yoyo: true },
        { scale: 2, repeat: 1, yoyo: true }
      )
      .fromTo(monster, { y: 110, scaleY: 2 }, { y: -80, scaleY: 1 }, 0.3)
      .to(monster, { y: 13, ease: "power1.in" }, ">")
      .to(monster, { scaleY: 0.7, scaleX: 1, transformOrigin: "50% 85%" })
      .to(monster, { y: -60, scaleY: 1 })
      .fromTo(
        ".hole",
        { scale: 0, repeat: 1, yoyo: true },
        { scale: 2, repeat: 1, yoyo: true }
      )
      .to(monster, { y: 110, scaleY: 1, ease: "power1.in" }, "<0.1");

    animation.eventCallback("onStart", function () {
      console.log("Animation started");
    });

    animation.eventCallback("onComplete", function () {
      console.log("Animation completed");
    });
  }, []);

  const holeCSS = {
    borderRadius: "50%",
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.homeexchange.com%2Fblog%2Fcontent%2Fimages%2Fgalleries%2Fpost-1227%2Ffull%2Fstreet.jpg&f=1&nofb=1&ipt=2864a5acbd243df441e321f586700cea4afd313c7e83add48665bc941627d6bf&ipo=images)",
        backgroundSize: "cover",
      }}
      className="wrapper h-screen flex items-end justify-center "
    >
      <div className="absolute btn-cont self-start flex w-screen mt-10  justify-center">
        <button
          className="btn btn-success"
          onClick={() => {
            console.log(animation);

            animation.restart();
          }}
        >
          PLAY
        </button>
      </div>
      <div className="relative  mb-20">
        <div className="relative w-60 h-60 overflow-hidden">
          <img
            src="/images/monster.png"
            alt="image"
            className="item w-20 absolute bottom-0 left-[35%] z-10 translate-y-52"
          ></img>
        </div>
        <div
          style={holeCSS}
          className="hole absolute scale-0 left-[36%]  w-20 h-4 bg-black translate-y-2 bottom-0"
        ></div>
      </div>
    </div>
  );
}
