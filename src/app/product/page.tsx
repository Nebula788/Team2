"use client";
import { Button } from "@/components/ui/button";
import {  Tooltip,
  TooltipContent,
  TooltipTrigger,} from "@/components/ui/tooltip"
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useAtom} from "jotai"
import { cartAtom } from "@/atoms/cartAtom";
export interface Book {
  goodread_id: string;
  author: string;
  title: string;
  rating: string;
}

interface ApiResponse {
  total_records: string;
  records_on_page: number;
  next_records_available: string;
  page_no: number;
  books: Book[];
}

const Page: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [cart, setCart] = useAtom(cartAtom);
  useEffect(() => {
    const fetchBooks = async () => {
      const url =
        "https://100k-goodreads-books-collection-api.p.rapidapi.com/rapidapi/goodread/goodread_pagination.php?page_no=30";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8819f6147emshfd0670faffbd3e1p19c9bcjsn69cebd9d5c16",
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
  console.log(cart);

  return (
    <div className="p-20 bg-accent grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {data?.books?.map((book, index) => (
        <Card className="w-fit py-0 ">
          <div
          className="flex flex-col w-[300px] justify-between p-3  h-[580px] mb-5 relative"
          key={index}>
          <img className="h-[350px] w-[300px] rounded-xl" src={book.img}></img>
          <Tooltip>
            <TooltipTrigger >
              <p className="font-semibold text-2xl line-clamp-2 h-[2lh]">
                {book.title}
              </p>
            </TooltipTrigger>
            <TooltipContent>{book.title}</TooltipContent>
          </Tooltip>
          <p className="text-muted-foreground line-clamp-1"> {book.author}</p>
          <div className="flex justify-between">
            <p className="font-bold text-l">$5</p>
            <p className="bg-chart-4 w-fit text-sm gap-1 flex items-center rounded-xl px-3 absolute top-6 right-6"><Star fill="" className="size-3"/> {book.rating}</p>
          </div>
          
          <Button onClick={() => {setCart([...cart, book])}}>Add to Cart</Button>
        </div>
        </Card>
      ))}
    </div>
  );
};

export default Page;
