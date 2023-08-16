"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".body",
      start: "75% bottom",
      toggleClass: "active",
      onEnter: () => console.log("enter"),
      //   onLeave: () => console.log("leave"),
      onToggle: (self) => setIsBottom(true),
      onLeaveBack: () => setIsBottom(false),
      onLeave: () => console.log("out"),
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
