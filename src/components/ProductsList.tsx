"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms/cartAtom";

export interface Book {
  goodread_id: string;
  author: string;
  title: string;
  rating: string;
  img: string;
}

interface ApiResponse {
  total_records: string;
  records_on_page: number;
  next_records_available: string;
  page_no: number;
  books: Book[];
}

export const ProductsList: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [cart, setCart] = useAtom(cartAtom);

  useEffect(() => {
    const fetchBooks = async () => {
      const url =
        "https://100k-goodreads-books-collection-api.p.rapidapi.com/rapidapi/goodread/goodread_pagination.php?page_no=30";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "8819f6147emshfd0670faffbd3e1p19c9bcjsn69cebd9d5c16",
          "x-rapidapi-host":
            "100k-goodreads-books-collection-api.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result: ApiResponse = await response.json();
      setData(result);
    };

    fetchBooks();
  }, []);

  if (!data) {
    return (
      <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse w-[300px] h-[580px] rounded-xl"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {data.books.map((book) => (
        <div
          key={book.goodread_id}
          className="group bg-card text-foreground border border-border rounded-xl shadow-md hover:shadow-xl transition overflow-hidden w-[300px]"
        >
          <div className="relative">
            <img
              src={book.img}
              alt={book.title}
              className="h-[360px] w-full object-cover rounded-t-xl group-hover:scale-101 transition duration-300"
            />

            <p className="absolute top-4 right-4 bg-primary text-primary-foreground flex items-center gap-1 px-3 py-1 rounded-full shadow">
              <Star className="h-4 w-4 fill-chart-4 text-chart-4" />
              {book.rating}
            </p>
          </div>

          <div className="p-4 flex flex-col justify-between h-[220px]">
            <Tooltip>
              <TooltipTrigger>
                <p className="font-semibold text-xl line-clamp-2">
                  {book.title}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{book.title}</p>
              </TooltipContent>
            </Tooltip>

            <p className="text-secondary line-clamp-1 mt-1">{book.author}</p>

            <p className="font-bold text-lg mt-2">$5.00</p>

            <Button
              className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/80 transition"
              onClick={() => setCart([...cart, { ...book, price: 5 }])}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
