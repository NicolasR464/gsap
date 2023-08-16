"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Math {
    getDistance(x1: number, y1: number, x2: number, y2: number): number;
  }
}

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function init() {
      gsap.set("body", { opacity: 1 });
      gsap.set(".circle", { xPercent: -50, yPercent: -50 });

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      Math.getDistance = function (x1, y1, x2, y2) {
        var xs = x2 - x1,
          ys = y2 - y1;
        xs *= xs;
        ys *= ys;
        return Math.sqrt(xs + ys);
      };

      let radius = Math.getDistance(0, 0, centerX, centerY);
      let fullWidth = radius * 2;
      let percentIncrease = fullWidth / 100;

      let tl = gsap
        .timeline({ onComplete: enableScrollTimeline })
        .to(".circle", { x: "90vw" })
        .to(".circle", {
          x: "50vw",
          scale: percentIncrease,
          duration: 1,
          ease: "power1.in",
        })
        .set(".animationWrapper", { opacity: 1 }, "<+=0.5")
        .from(".headings h1", { xPercent: -100, opacity: 0, duration: 1 }, "<")
        .from(
          ".headings h2",
          { xPercent: 100, opacity: 0, duration: 1 },
          "<+0.25"
        )
        .from(".logo", { scale: 0.3, opacity: 0, duration: 0.5 }, "<+0.5")

        .duration(5);

      let scrollTimeline = gsap
        .timeline({ paused: true })
        .to(".headings h1", { y: -100, opacity: 0 })
        .to(".headings h2", { y: 100, opacity: 0 }, "<")
        .set(".rotator", { opacity: 1 }, "<")
        .from(".rotator h1", { opacity: 0, scale: 0, stagger: 1 }, "<")
        .to(".rotator h1", { opacity: 0, scale: 2, stagger: 1 }, "<+1");

      function enableScrollTimeline() {
        // taglines away and rotator

        gsap.set(".moreContent", { display: "block" });

        ScrollTrigger.create({
          trigger: ".hero",
          start: "top top",
          pin: true,
          end: "+=" + window.innerHeight * 3,
          animation: scrollTimeline,
          scrub: 0.5,
        });
      }
    }

    //chrome does not report window.innerWidth accurately on load in CodePen editor view

    function checkWidth() {
      console.log("window.innerWidth ", window.innerWidth);
      if (window.innerWidth > 0) {
        console.log("good");
        init();
      } else {
        console.log("bad");
        gsap.delayedCall(0.05, checkWidth);
      }
    }
    checkWidth();
  }, []);

  return (
    <div className={styles.body}>
      <div className={`${styles.circle}  ${styles.star}`}></div>

      <div className={`${styles.hero}  ${styles.star}`}>
        <div className={`${styles.animationWrapper}  ${styles.star}`}>
          <div className={`${styles.logo}  ${styles.star}`}>
            <img src="https://assets.codepen.io/32887/company-logo.svg" />
          </div>
          <div className={`${styles.words}  ${styles.star}`}>
            <div className={`${styles.headings}  ${styles.star}`}>
              <h1 className={styles.h1}>The Company</h1>
              <h2 className={styles.h2}>Welcome to this site</h2>
            </div>
            <div className={`${styles.rotator}  ${styles.star}`}>
              <h1 className={styles.h1}>Our mission is to be the best</h1>
              <h1 className={styles.h1}>Our values align with your values</h1>
              <h1 className={styles.h1}>We have integrity and honor</h1>
              <h1 className={styles.h1}>
                Our customers are extremely satisfied
              </h1>
              <h1 className={styles.h1}>There is no competition</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.moreContent}  ${styles.star}`}>
        <h1 className={styles.h1}>More Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque
          lacus, commodo sit amet odio quis, ultrices convallis risus. Maecenas
          dictum sapien urna, vitae finibus tellus porta imperdiet. Pellentesque
          quis mi in enim sollicitudin commodo sed in augue. Morbi ut magna non
          ex fermentum hendrerit. Nam ac nulla tortor.
        </p>
        <p>
          {" "}
          Proin sagittis erat enim, id vestibulum eros pretium dignissim. Nunc
          fringilla hendrerit leo pellentesque bibendum. Mauris nec eleifend
          leo. Sed posuere et mauris ut posuere. Proin commodo augue sed
          eleifend convallis. Sed malesuada nibh fermentum, tincidunt nunc sit
          amet, fringilla mi.
        </p>
        <p>
          {" "}
          Proin sagittis erat enim, id vestibulum eros pretium dignissim. Nunc
          fringilla hendrerit leo pellentesque bibendum. Mauris nec eleifend
          leo. Sed posuere et mauris ut posuere. Proin commodo augue sed
          eleifend convallis. Sed malesuada nibh fermentum, tincidunt nunc sit
          amet, fringilla mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque
          lacus, commodo sit amet odio quis, ultrices convallis risus. Maecenas
          dictum sapien urna, vitae finibus tellus porta imperdiet. Pellentesque
          quis mi in enim sollicitudin commodo sed in augue. Morbi ut magna non
          ex fermentum hendrerit. Nam ac nulla tortor.
        </p>
        <p>
          {" "}
          Proin sagittis erat enim, id vestibulum eros pretium dignissim. Nunc
          fringilla hendrerit leo pellentesque bibendum. Mauris nec eleifend
          leo. Sed posuere et mauris ut posuere. Proin commodo augue sed
          eleifend convallis. Sed malesuada nibh fermentum, tincidunt nunc sit
          amet, fringilla mi.
        </p>
      </div>
    </div>
  );
}
