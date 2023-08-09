/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Tranform() {
  useEffect(() => {
    const truck = gsap.to(".truck", {
      transformOrigin: "106px 257px",
      rotation: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.81,
    });
  }, []);

  const bground: React.CSSProperties = {
    backgroundImage: `url(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-road-mountain-road-14.png&f=1&nofb=1&ipt=4733b65080a479c16ac41688b5dc768c9ab1e95198fa4a7baf022732ef35bf3c&ipo=images"
    )`,
    backgroundSize: "cover",
  };

  const positionXY = (e: any) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    console.log(x, y);
  };

  return (
    <div style={bground} className="h-screen flex items-end">
      <img
        onClick={positionXY}
        className="truck ml-40"
        src="/images/truck.png"
        alt="truck"
      />
    </div>
  );
}
