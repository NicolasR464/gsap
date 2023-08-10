/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Hover() {
  useEffect(() => {
    const item: any = document.querySelector(".btn");

    const tween = gsap.to(".btn", {
      scale: 1,
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    item.addEventListener("mouseenter", () => tween.play());
    item.addEventListener("mouseleave", () => {
      tween.pause();
      gsap.to(".btn", { scale: 0.75 });
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F297996-space-Earth.jpg&f=1&nofb=1&ipt=196434cb4aa9463d139ffa92cdd6e623315d8203c00b41eba977317408e6bca1&ipo=images)`,
        backgroundSize: "cover",
      }}
      className="flex flex-col justify-center items-center h-screen "
    >
      <h1 className="text-4xl justify-self-start mb-4 ">
        let&rsquo;s gooo 🚀{" "}
      </h1>
      <button className="btn btn-outline btn-success mb-40 will-change-transform text-3xl scale-75">
        launch
      </button>
    </div>
  );
}
