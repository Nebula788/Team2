"use client";
import { Button } from "@/components/ui/button";
import {  Tooltip,
  TooltipContent,
  TooltipTrigger,} from "@/components/ui/tooltip"
import React, { useEffect, useState } from "react";

interface Book {
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
  console.log(data);

  return (
    <div className="p-20 bg-accent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {data?.books?.map((book, index) => (
        <div
          className="flex flex-col w-[300px] justify-between p-3  h-[580px] "
          key={index}
          style={{ marginBottom: "20px" }}
        >
          <img className="h-[350px] w-[300px]" src={book.img}></img>
          <Tooltip>
            <TooltipTrigger >
              <p className="font-semibold text-2xl line-clamp-2">
                {book.title}
              </p>
            </TooltipTrigger>
            <TooltipContent>{book.title}</TooltipContent>
          </Tooltip>
          <p className="text-muted-foreground"> {book.author}</p>
          <p>★ {book.rating}</p>
          <Button>Add to Cart</Button>
        </div>
      ))}
    </div>
  );
};

export default Page;
