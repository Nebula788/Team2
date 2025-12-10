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

type Book = {
  title: string;
  price: number;
  quantity: number;
  goodread_id: string;
};

const Header = () => {
  const [cart, setCart] = useAtom<Book[]>(cartAtom as any);

  const removeFromCartQuantity = (title: string) => {
    setCart((prevCart) => {
      const existingBook = prevCart.find((book) => book.title === title);

      if (existingBook) {
        if (existingBook.quantity > 1) {
          return prevCart.map((book) =>
            book.title === title
              ? { ...book, quantity: book.quantity - 1 }
              : book
          );
        } else {
          return prevCart.filter((book) => book.title !== title);
        }
      }
      return prevCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item: any) => item.goodread_id !== id));
  };
  const totalAmount = cart.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );

  return (
    <div className="bg-accent">
      <div className="flex items-center justify-between px-10 border-b">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="flex items-center gap-2">
            <img src="nmtec-erxes-18-04.svg" className="h-12" alt="Logo" />
            <p className="text-l font-semibold">Academy</p>
          </Link>
        </div>
        <div className="flex gap-2">
          <Input className="w-40" type="text" placeholder=" Search" />
          <Link href={"/sign-in"}>
            <Button variant={"outline"}>
              <User />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} className="cursor-pointer">
                <ShoppingCart />
                {cart.length > 0 && (
                  <span className="ml-1 text-sm font-bold">
                    ({cart.reduce((sum, book) => sum + 1, 0)})
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-[600px]">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                The products currently in your cart.
              </SheetDescription>
              <SheetHeader>
                <div className="mt-4 space-y-2">
                  {cart.length === 0 ? (
                    <p className="text-center text-gray-500">
                      Your cart is empty.
                    </p>
                  ) : (
                    cart.map((book) => (
                      <Card key={book.title} className="p-3">
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <p className="font-semibold">{book.title}</p>
                            <p className="text-sm text-gray-600">
                              Quantity: {book.quantity} | Total:
                              {book.price * book.quantity}$
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(book.goodread_id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </Card>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount:</span>
                      <span>{totalAmount}$</span>
                    </div>
                    <Button className="w-full mt-4">Checkout</Button>
                  </div>
                )}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
