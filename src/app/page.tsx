"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
    <div className="flex flex-col gap-14 mt-28 px-6">
      <Card
        className="
          relative mx-auto w-[90%] max-w-4xl p-0 overflow-hidden 
          rounded-xl shadow-lg border border-primary/30
          bg-background
        "
      >
        <div
          className="
            h-2 w-full bg-gradient-to-r 
            from-primary to-secondary
          "
        />

        <CardHeader
          className="
            flex flex-row items-center justify-between px-8 py-6
          "
        >
          <div className="space-y-2">
            {score ? (
              <>
                <CardTitle className="text-4xl font-bold text-foreground tracking-tight">
                  Your Score:{" "}
                  <span className="text-secondary-foreground">{score}</span>
                  /25
                </CardTitle>

                <CardDescription className="text-xl text-foreground/80">
                  English Level:{" "}
                  <span className="font-semibold text-secondary">
                    {getLevel(score)}
                  </span>
                </CardDescription>
              </>
            ) : (
              <>
                <CardTitle className="text-3xl font-bold text-foreground tracking-tight">
                  English Proficiency Test
                </CardTitle>

                <CardDescription className="text-lg text-foreground/80">
                  Measure your reading and comprehension level in 5 minutes.
                </CardDescription>
              </>
            )}
          </div>

          {/* CTA Button */}
          <Link href="/test">
            <Button
              size="lg"
              className="
                bg-primary text-primary-foreground
                hover:bg-secondary hover:text-secondary-foreground
                px-8 py-6 text-lg font-semibold 
                rounded-lg shadow-md transition
              "
            >
              {score ? "Retake Test" : "Start Test"}
            </Button>
          </Link>
        </CardHeader>
      </Card>

      {/* Products Section */}
      <ProductsList />
    </div>
  );
};

export default page;
