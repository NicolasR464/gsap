/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Horizontal() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  //   useEffect(() => {
  //     if (containerRef.current) {
  //       setContainerWidth(containerRef.current.offsetWidth);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     ScrollTrigger.defaults({
  //       toggleActions: "restart pause resume none",
  //       markers: true,
  //       //   markers: false,
  //     });
  //   }, []);

  //   useEffect(() => {
  //     ScrollTrigger.create({
  //       id: "img",
  //       markers: true,
  //       trigger: ".img",
  //       //   scroller: ".img",
  //       start: "center center",
  //       end: "top top",
  //       scrub: 1,
  //       onEnter: () => console.log("enter"),
  //       onLeave: () => console.log("leave"),
  //       onEnterBack: () => console.log("enter back"),
  //       onLeaveBack: () => console.log("all the way back"),
  //       onUpdate: (self) => console.log("update: ", self.progress.toFixed(2)),
  //       onToggle: (self) => console.log("toggled", self.isActive),
  //       toggleClass: "active",
  //     });

  //     let imgTrigger = ScrollTrigger.getById("img");
  //   }, []);

  //   useEffect(() => {
  //     gsap.to(".img", {
  //       scrollTrigger: {
  //         id: "img",
  //         trigger: ".img",
  //         toggleActions: "restart pause resume none",
  //         start: "center 40%",
  //         // end: "bottom 100px",
  //         // end: "+=" + box3.current,
  //         end: "+=200",
  //         markers: true,
  //       },
  //       scale: 1.6,
  //       duration: 3,
  //       scrub: 1,
  //     });
  //   }, []);

  useEffect(() => {
    let sections = gsap.utils.toArray(".horizontal");
    // console.log(containerRef.current);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1.5,
        markers: false,
        start: "top top",

        // snap: 1 / (sections.length - 1),
        toggleActions: "restart pause resume none",
        end: () => "+=" + containerRef.current?.offsetWidth,
      },
    });

    const images = gsap.utils.toArray(".img");

    gsap.fromTo(
      images,
      { scale: 1 },
      {
        scale: 2,
        scrollTrigger: {
          id: "image",
          scroller: ".img",
          start: "top top",
          end: "top bottom", // When the bottom of the image goes past the top of the viewport
          scrub: true,
          //   horizontal: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <article
      ref={containerRef}
      className="flex container flex-row items-center justify-between"
    >
      <span>{containerRef.current?.offsetWidth}</span>
      <section>
        <div className="box box1 horizontal  horizontal1"> box1</div>
      </section>
      <section>
        <div className="box box2 horizontal horizontal2">box2</div>
      </section>
      <section>
        <div className="box flex justify-center items-center box3 horizontal horizontal3">
          <img
            className="m-10 w-80"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-JzB2ruOjBOs%2FWJy8tR_tJSI%2FAAAAAAAABdA%2F26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB%2Fs1600%2Fjupiter_HD.jpg&f=1&nofb=1&ipt=6072c3e6b1ab199abdb6af87f6a8eecb620075d816cd4c43f6d8c690e1471722&ipo=images"
            alt="planet"
          />
          <img
            className="m-10 w-80"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-JzB2ruOjBOs%2FWJy8tR_tJSI%2FAAAAAAAABdA%2F26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB%2Fs1600%2Fjupiter_HD.jpg&f=1&nofb=1&ipt=6072c3e6b1ab199abdb6af87f6a8eecb620075d816cd4c43f6d8c690e1471722&ipo=images"
            alt="planet"
          />
        </div>
      </section>
      <section>
        <div className="box flex justify-center items-center box4 horizontal horizontal4">
          <img
            className="img"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ymDFjFAlWa8%2FUorFGDrMs3I%2FAAAAAAAAE5k%2FZBst0V6vrdk%2Fs1600%2FMercury.jpg&f=1&nofb=1&ipt=9e89c89eea3344dd2545388d9371a6cc1f4ec7690569fe19a002acbea97d7717&ipo=images"
            alt="planet 2"
          />
        </div>
      </section>
      <section>
        <div className="box horizontal5 horizontal box5">box5</div>
      </section>
    </article>
  );
}
