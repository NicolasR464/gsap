/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Tween() {
  useEffect(() => {
    gsap.to(".monster1", {
      x: 400,
      y: 200,
      scale: 3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "back(2)",
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".monster2",
      {
        x: 800,
        y: 400,
        opacity: 0,
        scale: 4,
      },
      { x: 400, y: 200, scale: 3, duration: 3, opacity: 1 }
    );
  }, []);
  return (
    <div>
      <h1>Tweens</h1>
      <img
        className="w-32 monster1"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F6Tpo6nM6c.png&f=1&nofb=1&ipt=263746bba242785e0456e6707aed2ee70654d2fe9decfac3a72aac71bfc014d5&ipo=images"
        alt="monster"
      />
      <img
        className="w-32 monster2"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Flil-monster-png--2388.png&f=1&nofb=1&ipt=9adffc060b8b184b90a6f607394b485aaa10201936aa3bb370189065d2f15016&ipo=images"
        alt="monster"
      />
    </div>
  );
}
