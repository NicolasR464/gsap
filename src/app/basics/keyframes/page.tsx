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
        "75%": { y: 0, ease: "sine.in" },
        "100%": { x: 320, ease: "none" },
      },
      duration: 3,
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2Fimages1%2FCity-street-wallpaper-hd.jpg&f=1&nofb=1&ipt=30565295bff7c4df4be75c2cb972716cfc7a0db1db2c633381b98e98642914b8&ipo=images)",
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-center items-end"
    >
      <img
        className="w-40 mb-10 slime"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fslime-clipart-mucus-18.png&f=1&nofb=1&ipt=c69f8c90178850fde9a3ff31afccec9ac445efd3f4dbc2d08c49d90204ab9efb&ipo=images"
        alt="slime"
      />
      <button
        onClick={() => tl.restart()}
        className="jump btn btn-outline btn-warning self-center"
      >
        jump
      </button>
    </div>
  );
}
