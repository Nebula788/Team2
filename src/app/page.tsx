"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ProductsList } from "@/components/ProductsList";
import { getLevel } from "@/lib/getLevel";
import Link from "next/link";
const page = () => {
  const score = window.localStorage.getItem("score");
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
    </div>
  );
};

export default page;
