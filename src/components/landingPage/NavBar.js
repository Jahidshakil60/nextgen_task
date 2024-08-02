"use client";
import React from "react";

const navData = [
  {
    title: "Section 1",
    slug: "/",
  },
  {
    title: "Section 2",
    slug: "/",
  },
  {
    title: "Section 3",
    slug: "/",
  },
  {
    title: "2 Sub Divs",
    slug: "/",
  },
  {
    title: "Section 4",
    slug: "/",
  },
  {
    title: "Two Liner 1",
    slug: "/",
  },
  {
    title: " Two Liner 2",
    slug: "/",
  },
  {
    title: " Section 5",
    slug: "/",
  },
  {
    title: " Two Liner 3",
    slug: "/",
  },
];

function NavBar() {
  return (
    <div className="bg-[#000522dc] p-4 fixed z-40  top-0 w-full ">
      <div className="flex justify-between items-center">
        <div className="bg-white w-12 h-12 rounded-full"></div>
        <ul className="flex gap-3">
          {navData.map((data, i) => {
            return (
              <li key={i}>
                <a
                  href={`${data.slug}`}
                  className="text-black text-sm font-bold bg-[#FFE600] px-4 py-3"
                >
                  {data.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
