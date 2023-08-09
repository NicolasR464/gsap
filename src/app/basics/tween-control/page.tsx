/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

let tween: any;

export default function Tween() {
  useEffect(() => {
    tween = gsap.fromTo(
      "#freds img",
      {
        y: 600,
        x: 600,
        opacity: 1,
        rotate: 2,
      },
      {
        y: 200,
        stagger: { each: 0.2, from: "end" }, // from: start/center/edges
        ease: "elastic.inOut",
        rotate: 20,
        duration: 3,
        paused: true,
      }
    );
  }, []);

  const bground: React.CSSProperties = {
    backgroundImage: `url(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6961868.jpg&f=1&nofb=1&ipt=da0fb342e209889da8936675a02f2ad50913933f5c5db35e7519d5e294c8b261&ipo=images"
    )`,
    backgroundSize: "cover",
  };

  //   useEffect(() => {
  //     gsap.fromTo(
  //       ".monster2",
  //       {
  //         x: 800,
  //         y: 400,
  //         opacity: 0,
  //         scale: 4,
  //       },
  //       { x: 400, y: 200, scale: 3, duration: 3, opacity: 1 }
  //     );
  //   }, []);
  return (
    <div style={bground} id="freds" className="flex h-screen ">
      <img
        className="w-32 h-32 monster1 opacity-0"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F6Tpo6nM6c.png&f=1&nofb=1&ipt=263746bba242785e0456e6707aed2ee70654d2fe9decfac3a72aac71bfc014d5&ipo=images"
        alt="monster"
      />
      <div className="flex w-screen justify-center mt-4">
        <button
          onClick={() => tween.play()}
          className="btn btn-info m-2"
          id="play"
        >
          play
        </button>
        <button
          onClick={() => tween.pause()}
          className="btn btn-info m-2"
          id="pause"
        >
          pause
        </button>
        <button
          onClick={() => tween.reverse()}
          className="btn btn-info m-2"
          id="reverse"
        >
          reverse
        </button>
        <button
          onClick={() => tween.restart()}
          className="btn btn-info m-2"
          id="restart"
        >
          restart
        </button>
      </div>
    </div>
  );
}
