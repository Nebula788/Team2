"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { BOOKS } from "@/lib/booksData";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";

interface Book {
  goodread_id: string;
  author: string;
  title: string;
  rating: string;
  quantity: number;
}

export const ProductsList: React.FC = () => {
  const [cart, setCart] = useAtom<Book[]>(cartAtom as any);

  return (
    <div className="p-20 bg-accent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {BOOKS?.map((book, index) => (
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
          <p className="text-muted-foreground line-clamp-1"> {book.author}</p>
          <div className="flex justify-between">
            <p className="font-bold text-l">{book.price}</p>
            <p className="bg-chart-4 w-fit text-sm gap-1 flex items-center rounded-xl px-3 absolute top-6 right-6">
              <Star fill="" className="size-3" /> {book.rating}
            </p>
          </div>
          <Button
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
      ))}
    </div>
  );
};
