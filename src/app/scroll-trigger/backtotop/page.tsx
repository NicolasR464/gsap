"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// with Herman animation : https://codepen.io/snorkltv/pen/mdwNWbj
// resetting the animation with fastScrollEnd

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".body",
      start: "75% bottom",
      onEnter: () => console.log("enter"),
      onToggle: (self) => setIsBottom(true),
      onLeaveBack: () => setIsBottom(false),
    });
  }, []);

  return (
    <div className="body">
      <div className={`${styles.message} ${isBottom ? "visible" : "hidden"}`}>
        <a className={styles.a} href="#top">
          back to top
        </a>
      </div>
      <div className={`${styles.fullscreen} ${styles.light}`}>Scroll Down</div>
      <div className={`${styles.fullscreen} ${styles.dark}`}>Section 2</div>
      <div className={`${styles.fullscreen} ${styles.light}`}>Section 3</div>
      <div className={`${styles.fullscreen} ${styles.pink}`}>Section 4</div>
    </div>
  );
}
