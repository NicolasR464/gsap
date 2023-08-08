/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Vertical() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const images = gsap.utils.toArray(".img-v");

    images.forEach((image: any, i) => {
      gsap.to(image, {
        scale: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: image,
          id: "image-vertical",

          start: "clamp(top 75%)",
          end: "clamp(top 25%)", // When the bottom of the image goes past the top of the viewport
          scrub: 1,
          //   pin: true,
          //   horizontal: true,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <img
          className="img-v"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-JzB2ruOjBOs%2FWJy8tR_tJSI%2FAAAAAAAABdA%2F26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB%2Fs1600%2Fjupiter_HD.jpg&f=1&nofb=1&ipt=6072c3e6b1ab199abdb6af87f6a8eecb620075d816cd4c43f6d8c690e1471722&ipo=images"
          alt="planet"
        />
      </div>
      <div className="h-screen flex justify-center items-center">
        <img
          className="img-v"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ymDFjFAlWa8%2FUorFGDrMs3I%2FAAAAAAAAE5k%2FZBst0V6vrdk%2Fs1600%2FMercury.jpg&f=1&nofb=1&ipt=9e89c89eea3344dd2545388d9371a6cc1f4ec7690569fe19a002acbea97d7717&ipo=images"
          alt="planet 2"
        />
      </div>
      <div className="h-screen flex justify-center items-center">
        <img
          className="img-v"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nasa.gov%2Fsites%2Fdefault%2Ffiles%2Fthumbnails%2Fimage%2Fhs-2016-15-a-full_tif.jpg&f=1&nofb=1&ipt=2b6ea8c111785aaf7c90f4b42781d1268a18f08925bb573642c4e260e5ddc890&ipo=images"
          alt="planet 3"
        />
      </div>
    </div>
  );
}
