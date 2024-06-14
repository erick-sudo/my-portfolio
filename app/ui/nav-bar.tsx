"use client";

import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import React, { useState } from "react";

const tabs = [
  { title: "Home", path: "" },
  { title: "Me", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Articles", path: "articles" },
];

export function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const popUpSprings = useSpring({
    from: {
      opacity: 0,
      translateX: "100%",
    },
    to: {
      opacity: openDrawer ? 1 : 0,
      translateX: openDrawer ? "0%" : "100%",
    },
    config: { tension: 200, friction: 5 },
  });

  return (
    <div>
      <div className="container mx-auto bg-stone-500/20 border-2 border-stone-500/20 backdrop-blur flex items-center gap-4 py-2 px-3 rounded-2xl sticky top-4">
        <div className="relative px-4 rounded-2xl overflow-hidden text-2xl py-3 text-lime-800 font-extrabold">
          &lt;Obuya /&gt;
        </div>

        {/* Large Screen */}
        <div className="hidden lg:flex flex-grow">
          <div className="flex justify-center gap-4 flex-grow px-4">
            {tabs.map((tab, index) => (
              <Link
                className="hover:bg-lime-800/30 rounded-2xl px-4 py-2 text-sm text-white hover:ring-2 hover:ring-stone-400/20 hover:text-stone-400 hover:bg-stone-900 duration-300 flex items-center justify-center"
                key={index}
                href={tab.path}
              >
                {tab.title}
              </Link>
            ))}
          </div>
          <button className="w-24 p-2 bg-lime-800 rounded-2xl text-white">
            Lorem
          </button>
        </div>

        {/* Small Screen */}
        <div className="flex-grow lg:hidden flex justify-end">
          {!openDrawer && (
            <button
              onClick={() => setOpenDrawer(true)}
              className="p-2 rounded-lg border-2 border-stone-500/20 text-stone-500 hover:border-stone-400/20 hover:text-stone-400 hover:bg-stone-900 duration-300"
            >
              <Bars4Icon className="" height={30} />
            </button>
          )}
        </div>
      </div>
      {/* Small Screen Popup */}
      <animated.div
        style={{ ...popUpSprings }}
        className="lg:hidden fixed bg-stone-800 top-2 bottom-4 right-4 rounded-2xl"
      >
        <div className="flex p-4 justify-end w-72">
          <button
            onClick={() => setOpenDrawer(false)}
            className="p-2 rounded-lg border-2 border-stone-500/20 text-stone-500 hover:border-stone-400/20 hover:text-stone-400 hover:bg-stone-900 duration-300"
          >
            <XMarkIcon className="" height={30} />
          </button>
        </div>
        <div className="grid gap-2 p-4">
          {tabs.map((tab, index) => (
            <Link
              className="hover:bg-lime-800/30 rounded-2xl px4 py-2 text-sm text-white hover:ring-2 hover:ring-stone-400/20 hover:text-stone-400 hover:bg-stone-900 duration-300 flex items-center justify-center"
              key={index}
              href={tab.path}
            >
              {tab.title}
            </Link>
          ))}
        </div>
      </animated.div>
    </div>
  );
}
