"use client";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

export default function Tween() {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Tweens</h1>
    </div>
  );
}
