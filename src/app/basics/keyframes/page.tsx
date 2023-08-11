/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";

import { useEffect, useRef, useState } from "react";

let tl: any;
export default function Keyframes() {
  useEffect(() => {
    tl = gsap.timeline();

    tl.to(".slime", {
      keyframes: {
        "25%": { y: 0 },
        "50%": { y: -100, ease: "sine" },
        "70%": { y: 0, ease: "sine.in" },
        "100%": { x: 320, ease: "none" },
      },
      duration: 2,
    })
      .add("test")
      .to(
        ".slime2",
        {
          repeat: -1,

          innerWidth: 17,
          keyframes: {
            "0%": {
              skewX: -2,
              rotation: 0,
              skewY: 0,
              ease: "power3.in",
            },
            "50%": { rotation: -2, y: -100, skewX: 0, skewY: -14 },

            "100%": {
              rotation: 0,
              skewY: 0,

              y: -40,
              skewX: -2,
            },
          },
          duration: 1,
        },
        0
      );
  }, []);

  //   "40%": { rotation: 0 },
  //   "50%": { y: -90, rotation: 90, ease: "power4.out" },
  //   "70%": { rotation: 180, ease: "power4.in" },
  //   "100%": { y: -35, rotation: 360, ease: "sine.in" },

  return (
    <div
      style={{
        backgroundImage:
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2Fimages1%2FCity-street-wallpaper-hd.jpg&f=1&nofb=1&ipt=30565295bff7c4df4be75c2cb972716cfc7a0db1db2c633381b98e98642914b8&ipo=images)",
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-around items-end border-4 border-rose-700 w-screen"
    >
      <img
        className="w-40 mb-10 slime "
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fslime-clipart-mucus-18.png&f=1&nofb=1&ipt=c69f8c90178850fde9a3ff31afccec9ac445efd3f4dbc2d08c49d90204ab9efb&ipo=images"
        alt="slime"
      />
      <button
        onClick={() => tl.restart()}
        className="jump btn btn-outline btn-warning self-center"
      >
        jump
      </button>
      <div className="relative">
        <img
          className="slime2 w-20 absolute -translate-y-10 justify-end justify-self-end z-20"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fslime-clipart-green-blob-7.png&f=1&nofb=1&ipt=002a43b24fce027f3bcc2bbdfb45c455bde9a040cbc77612c6377a6bfc9086c6&ipo=images"
          alt="slime2"
        />
        <img className="w-20 z-10" src="/images/puddle.png" alt="puddle" />
      </div>
    </div>
  );
}
