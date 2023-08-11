"use client";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
import { useEffect, useRef, useState } from "react";

export default function Tween() {
  useEffect(() => {
    gsap.to("p", {
      text: "typewriter effect with GSAP 3",
      duration: 2,
      ease: "power1.in",
    });
  }, []);
  return (
    <div>
      <p></p>
    </div>
  );
}
