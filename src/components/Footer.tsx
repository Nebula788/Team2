"use client";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconPhone,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const path = usePathname();
  if (path === "/test") return null;
  return (
    <footer className="bg-primary text-white border-t border-white/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Where we are </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Located in the heart of downtown, just two blocks from the train
            station.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Our team </h3>
          <ul className="space-y-1 text-sm text-white/80">
            <li className="flex items-center gap-2 font-semibold">
              <img src="Gantulga.png" className="size-10 rounded-full" />
              Gantulga{" "}
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <img src="Altai.png" className="size-10 rounded-full" />
              Altai{" "}
            </li>

            <li className="flex items-center gap-2 font-semibold">
              <img src="Telmen.png" className="size-10 rounded-full" />
              Telmen{" "}
            </li>

            <li className="flex items-center gap-2 font-semibold">
              <img src="Nandin.png" className="size-10 rounded-full" />
              Nandin{" "}
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Contact us </h3>
          <p className="text-sm text-white/80 flex gap-1">
            <IconBrandFacebook /> Example.page
          </p>
          <p className="text-sm text-white/80  flex gap-1">
            <IconBrandGoogle /> Example@gmail.com
          </p>
          <p className="text-sm text-white/80  flex gap-1">
            <IconBrandInstagram /> Example_e
          </p>

          <p className="text-lg font-semibold text-white mt-3">
            <IconPhone/> <span className="text-white">0000000</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm text-white/70">
        © 2024 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
};
