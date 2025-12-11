"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";

import { BOOKS } from "@/lib/booksData";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";
import { Rating } from "./ui/rating";
import { Badge } from "./ui/badge-2";
import Link from "next/link";
import { Card } from "./ui/card";

import { IconChevronsRight } from "@tabler/icons-react";

export interface Book {
  goodread_id: string;
  author: string;
  title: string;
  rating: number;
  quantity: number;
}

export const ProductsList: React.FC = () => {
  const [cart, setCart] = useAtom<any[]>(cartAtom as any);

  return (
    <div className="max-w-[1200px] mx-auto">
      <span className="flex text-2xl font-bold py-5 text-secondary ">
        Best Seller
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {BOOKS?.filter((book) => parseFloat(book.rating) >= 4).map(
          (book, index) => (
            <Card className="h-fit w-fit py-0 bg-foreground border-primary hover:bg-muted transition">
              <div
                className="flex flex-col w-[300px] justify-between p-3  h-[580px] mb-5 relative"
                key={book.goodread_id}
              >
                <img className="h-[350px] w-[300px]" src={book.img} />
                <Tooltip>
                  <TooltipTrigger>
                    <p className="font-semibold text-2xl line-clamp-2 h-[2lh]">
                      {book.title}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>{book.title}</TooltipContent>
                </Tooltip>
                <p className="text-muted-foreground line-clamp-1">
                  {" "}
                  {book.author}
                </p>
                <div className="flex gap-2">
                  <Rating rating={parseFloat(book.rating)}></Rating>
                  <p>{book.rating}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-l">$ {book.price}</p>
                  {book.bestseller && (
                    <Badge className="absolute top-4 right-4 bg-chart-1 text-background font-mono">
                      Best seller
                    </Badge>
                  )}
                </div>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    const temp = [...cart];

                    if (temp.length > 0) {
                      const findIndex = temp.findIndex(
                        (item) => item.goodread_id == book.goodread_id
                      );

                      if (findIndex !== -1) {
                        temp[findIndex].quantity = temp[findIndex].quantity + 1;
                        setCart(temp);
                      } else {
                        setCart([...cart, { ...book, quantity: 1 }]);
                      }
                    } else {
                      setCart([...cart, { ...book, quantity: 1 }]);
                    }
                  }}
                  className="cursor-pointer"
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          )
        )}
      </div>
      <div className="flex justify-between p-5">
        <h1 className="text-2xl font-bold text-secondary">Book Library</h1>
        <Link href={"/product"}>
          <span className="text-2xl font-bold flex items-center gap-2 text-secondary hover:text-primary transition">
            View all Product
            <IconChevronsRight stroke={3} />
          </span>
        </Link>
      </div>
      <div className=" bg-accent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {BOOKS?.filter((book) => parseFloat(book.rating) <= 4)
          .slice(0, 4)
          .map((book, index) => (
            <Card className="h-fit w-fit py-0 bg-foreground border-primary hover:bg-muted transition">
              <div
                className="flex flex-col w-[300px] justify-between p-3  h-[580px] mb-5 relative"
                key={book.goodread_id}
              >
                <img className="h-[350px] w-[300px]" src={book.img} />
                <Tooltip>
                  <TooltipTrigger>
                    <p className="font-semibold text-2xl line-clamp-2 h-[2lh]">
                      {book.title}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>{book.title}</TooltipContent>
                </Tooltip>
                <p className="text-muted-foreground line-clamp-1">
                  {" "}
                  {book.author}
                </p>
                <div className="flex gap-2">
                  <Rating rating={parseFloat(book.rating)}></Rating>
                  <p>{book.rating}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-l">$ {book.price}</p>
                  {book.bestseller && (
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white font-mono">
                      Best seller
                    </Badge>
                  )}
                </div>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    const temp = [...cart];

                    if (temp.length > 0) {
                      const findIndex = temp.findIndex(
                        (item) => item.goodread_id == book.goodread_id
                      );

                      if (findIndex !== -1) {
                        temp[findIndex].quantity = temp[findIndex].quantity + 1;
                        setCart(temp);
                      } else {
                        setCart([...cart, { ...book, quantity: 1 }]);
                      }
                    } else {
                      setCart([...cart, { ...book, quantity: 1 }]);
                    }
                  }}
                  className="cursor-pointer"
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};
