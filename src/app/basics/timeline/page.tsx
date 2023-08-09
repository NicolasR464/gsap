/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

let animation: any;
export default function Tween() {
  useEffect(() => {
    animation = gsap
      .timeline()
      .from("#freds", { opacity: 0, duration: 2 })
      .add("test")
      .fromTo(
        ".monster1",
        {
          y: 600,
          x: 600,
          opacity: 1,
          rotate: 2,
        },
        {
          y: 200,
          ease: "elastic.inOut",
          rotate: 20,
          duration: 3,
        }
      )
      .fromTo(
        ".monster2",
        {
          x: 2000,
          y: 1000,
          opacity: 0,
          scale: 4,
        },
        { x: 800, y: 800, scale: 3, duration: 3, rotation: 20, opacity: 1 },
        1
      );

    // animation.play("test"); // this will play starting from the "test" label
  }, []);

  const bground: React.CSSProperties = {
    backgroundImage: `url(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6547481.jpg&f=1&nofb=1&ipt=b013a0d7d89544723a72afc03864a07dbc66c413b9329169965b7a6051172735&ipo=images"
    )`,
    backgroundSize: "cover",
  };

  return (
    <div style={bground} id="freds" className="flex h-screen ">
      <img
        className="w-32 h-32 monster1 opacity-0"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F6Tpo6nM6c.png&f=1&nofb=1&ipt=263746bba242785e0456e6707aed2ee70654d2fe9decfac3a72aac71bfc014d5&ipo=images"
        alt="monster"
      />
      <img
        className="w-20 h-20 monster2 opacity-0"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Flil-monster-png--2388.png&f=1&nofb=1&ipt=9adffc060b8b184b90a6f607394b485aaa10201936aa3bb370189065d2f15016&ipo=images"
        alt="monster"
      />
      <div className="flex w-screen justify-center mt-4">
        <button
          onClick={() => animation.play()}
          className="btn btn-info m-2"
          id="play"
        >
          play
        </button>
        <button
          onClick={() => animation.pause()}
          className="btn btn-info m-2"
          id="pause"
        >
          pause
        </button>
        <button
          onClick={() => animation.reverse()}
          className="btn btn-info m-2"
          id="reverse"
        >
          reverse
        </button>
        <button
          onClick={() => animation.restart()}
          className="btn btn-info m-2"
          id="restart"
        >
          restart
        </button>
        <button
          onClick={() => animation.play("test")}
          className="btn btn-info m-2"
          id="test"
        >
          test
        </button>
      </div>
    </div>
  );
}
