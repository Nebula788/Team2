"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Trash2, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { cartAtom } from "@/atoms/cartAtom";
import { useAtom } from "jotai";

const Header = () => {
  const [cart, setCart] = useAtom(cartAtom);
  return (
    <div className="bg-accent">
      <div className="flex items-center justify-between px-10 border-b">
        <div className="flex items-center gap-2 ">
          <Link href={"/"} className="flex items-center gap-2 ">
            <img src="nmtec-erxes-18-04.svg" className="h-12"></img>
            <p className="text-l font-semibold">Academy</p>
          </Link>
        </div>
        <div className="flex gap-2 ">
          <Input className="w-40" type="text" placeholder=" Search"></Input>
          <Link href={"/sign-in"}>
            <Button variant={"outline"}>
              <User />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} className="cursor-pointer">
                <ShoppingCart />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-[600px]">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription></SheetDescription>
              <SheetHeader>
                
                <div>
                    {cart.map((book)=><Card className="px-2">{book.title}</Card>)}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
