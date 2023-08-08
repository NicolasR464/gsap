/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Tween() {
  useEffect(() => {
    gsap.fromTo(
      "#freds img",
      {
        y: 600,
        x: 600,
      },
      {
        y: 200,
        stagger: 0.6,
        ease: "elastic.inOut",
        rotate: 20,
        duration: 3,
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
        className="w-32 h-32 monster1"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F6Tpo6nM6c.png&f=1&nofb=1&ipt=263746bba242785e0456e6707aed2ee70654d2fe9decfac3a72aac71bfc014d5&ipo=images"
        alt="monster"
      />
      <img
        className="w-32 h-32  monster2"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Flil-monster-png--2388.png&f=1&nofb=1&ipt=9adffc060b8b184b90a6f607394b485aaa10201936aa3bb370189065d2f15016&ipo=images"
        alt="monster"
      />
    </div>
  );
}
