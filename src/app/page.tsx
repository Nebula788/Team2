"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ProductsList } from "@/components/ProductsList";
import { getLevel } from "@/lib/getLevel";
import Link from "next/link";
import { TextLoop } from "@/components/ui/text-loop";
import { useEffect, useState } from "react";
const page = () => {
  const [score, setScore] = useState<any>(null);
  useEffect(() => {
    if (window !== undefined) {
      const sss = window.localStorage.getItem("score");
      setScore(sss);
    }
  });

  return (
    <div className="flex flex-col gap-5">
      {score ? (
        <Card className="flex flex-row justify-around max-w-full w-[90%] mx-auto mt-5">
          <CardTitle>
            {score} {getLevel(parseInt(score))}
          </CardTitle>
          <Link href={"/test"}>
            <Button>Try again!</Button>
          </Link>
        </Card>
      ) : (
        <Card
          className="max-w-full w-[90%] mx-auto flex flex-row justify-around  mt-5
        "
        >
          <CardTitle>try our english assessment exam</CardTitle>
          <Link href={"/test"}>
            <Button>Make Test</Button>
          </Link>
        </Card>
      )}
      <ProductsList />
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
        <span className="text-6xl font-bold">Gantulga</span>
      </TextLoop>
    </div>
  );
};

export default page;
