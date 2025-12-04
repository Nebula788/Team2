"use client";
import { TextLoop } from "@/components/ui/text-loop";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [fadeBg, setFadeBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeBg(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        <div
          className={`h-screen w-full flex justify-center items-center text-accent transition-colors duration-1000 ${
            fadeBg ? "bg-accent" : "bg-accent-foreground"
          }`}
        >
          <TextLoop
            className="overflow-y-clip"
            transition={{
              type: "spring",
              stiffness: 9000,
              damping: 80,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
                filter: "blur(4px)",
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
                filter: "blur(4px)",
              },
            }}
          >
            <span className="text-6xl">Founders</span>
            <span className="text-6xl">Developers</span>
            <span className="text-6xl">Designers</span>
            <span className="text-6xl">Design Engineers</span>
          </TextLoop>
        </div>
      </div>
    </div>
  );
};

export default Page;

