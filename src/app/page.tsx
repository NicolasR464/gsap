"use client";
import Image from "next/image";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const box3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(box3.current);
    gsap.to(".box3", {
      scrollTrigger: {
        trigger: ".box3",
        start: "center center", // first argument the element // second arg the viewport
        // end: "bottom 100px",
        end: "+=" + box3.current?.offsetHeight,
        // end: "+=200",
        markers: true,
        // scrub: true,
        scrub: 1,

        toggleActions: "restart pause resume none",
      },
      x: 400,
      rotation: 360,
      // duration: 30,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="box box1">box1</div>
      </section>
      <section>
        <div className="box box2">box2</div>
      </section>
      <section>
        <div ref={box3} className="box box3">
          box3
        </div>
      </section>
      <section>
        <div className="box box4">box4</div>
      </section>
      <section>
        <div className="box box4">box5</div>
      </section>
    </main>
  );
}
