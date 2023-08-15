/* eslint-disable @next/next/no-img-element */
"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef, useState } from "react";

let tween: any;

export default function Basics() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let banners = document.querySelectorAll(".banner");

    banners.forEach((element) => {
      console.log(element);
      let background = element.querySelector(".background");

      let headings = element.querySelectorAll("h1, h2");

      let tl = gsap
        .timeline()
        .from(background, {
          backgroundPosition: "60% 0%",
          filter: "brightness(0.1)",
          duration: 1,
        })
        .from(headings, { y: -100, stagger: 0.1 }, 0);

      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none reverse",
        animation: tl,
      });
    });
  }, []);

  return (
    <div>
      <div className="hero">Scroll Down</div>
      <div className="banner">
        <div className="background miata"></div>
        <div className="foreground">
          <h1>1995 Mazda Miata</h1>
          <h2>10k miles</h2>
        </div>
      </div>
      <div className="content">
        <p>
          Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit
          amet. Nulla at enim augue. Nam quam velit, efficitur vestibulum justo
          iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis
          dis parturient montes
        </p>
        <p>
          Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor
          tellus sit amet, fermentum elit. Phasellus sed neque tincidunt,
          ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non
          convallis eros pulvinar in. Proin sit amet ultrices est. Aenean non
          quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>
          Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula.
          Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
          finibus congue urna. Vestibulum malesuada non turpis in molestie.
          Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.
        </p>
      </div>

      <div className="banner">
        <div className="background cayman"></div>
        <div className="foreground">
          <h1>2006 Porsche Cayman S</h1>
          <h2>33k miles</h2>
        </div>
      </div>
      <div className="content">
        <p>
          Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit
          amet. Nulla at enim augue. Nam quam velit, efficitur vestibulum justo
          iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis
          dis parturient montes
        </p>
        <p>
          Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor
          tellus sit amet, fermentum elit. Phasellus sed neque tincidunt,
          ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non
          convallis eros pulvinar in. Proin sit amet ultrices est. Aenean non
          quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>
          Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula.
          Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
          finibus congue urna. Vestibulum malesuada non turpis in molestie.
          Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.
        </p>
      </div>

      <div className="banner">
        <div className="background gti"></div>
        <div className="foreground">
          <h1>1983 VW Rabbit GTI</h1>
          <h2>253k miles</h2>
        </div>
      </div>
      <div className="content">
        <p>
          Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit
          amet. Nulla at enim augue. Nam quam velit, efficitur vestibulum justo
          iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis
          dis parturient montes
        </p>
        <p>
          Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor
          tellus sit amet, fermentum elit. Phasellus sed neque tincidunt,
          ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non
          convallis eros pulvinar in. Proin sit amet ultrices est. Aenean non
          quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>
          Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula.
          Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
          finibus congue urna. Vestibulum malesuada non turpis in molestie.
          Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.
        </p>
      </div>

      <div className="banner">
        <div className="background supra"></div>
        <div className="foreground">
          <h1>1994 Toyota Supra</h1>
          <h2>86k miles</h2>
        </div>
      </div>
      <div className="content">
        <p>
          Nullam lobortis tincidunt orci, id ultricies mauris consectetur sit
          amet. Nulla at enim augue. Nam quam velit, efficitur vestibulum justo
          iaculis, rutrum posuere sem. Orci varius natoque penatibus et magnis
          dis parturient montes
        </p>
        <p>
          Fusce at tincidunt felis. Etiam sit amet lectus viverra, porttitor
          tellus sit amet, fermentum elit. Phasellus sed neque tincidunt,
          ultrices ligula at, mattis elit. Fusce dictum ipsum metus, non
          convallis eros pulvinar in. Proin sit amet ultrices est. Aenean non
          quam lectus. Nullam ac mi risus. Suspendisse sed risus varius,
          vulputate urna in, rhoncus sem. Mauris nec sodales mi.
        </p>
        <p>
          Pellentesque ac nunc eget nisl tempor sagittis sit amet a ligula.
          Aliquam a blandit velit. Ut diam velit, sollicitudin ac ante id,
          finibus congue urna. Vestibulum malesuada non turpis in molestie.
          Etiam a ullamcorper lorem. Vestibulum a hendrerit libero.
        </p>
      </div>
    </div>
  );
}
