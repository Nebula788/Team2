"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Trash2, User, Minus, Plus } from "lucide-react";
import Link from "next/link";

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
  img: string;
};

const Header = () => {
  const [cart, setCart] = useAtom<Book[]>(cartAtom as any);

  const decreaseQty = (title: string) => {
    setCart((prevCart) =>
      prevCart
        .map((book) =>
          book.title === title
            ? { ...book, quantity: Math.max(1, book.quantity - 1) }
            : book
        )
        .filter((book) => book.quantity > 0)
    );
  };

  const increaseQty = (title: string) => {
    setCart((prevCart) =>
      prevCart.map((book) =>
        book.title === title ? { ...book, quantity: book.quantity + 1 } : book
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.goodread_id !== id));
  };

  const totalAmount = cart.reduce(
    (total, book) => total + book.price * book.quantity,
    0
  );

  const totalItems = cart.reduce((sum, book) => sum + book.quantity, 0);

  return (
    <div className="bg-primary sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-8 py-4 border-b">
        <Link href="/" className="flex  items-center gap-2">
          <span className="text-3xl font-bold text-secondary">Book</span>
          <p className="text-lg font-semibold">Story</p>
        </Link>

        <div className="hidden md:flex items-center gap-2 w-1/3">
          <Input className="w-full bg-background text-primary" type="text" placeholder="Search books..." />
          <Button variant="secondary" size="icon">
            <Search />
          </Button>
        </div>

        <div className="flex gap-3 items-center">
          <Link href="/sign-in">
            <Button variant="secondary" size="icon" >
              <User />
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" className="relative">
                <ShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
                    {totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-[550px]">
              <SheetHeader>
                <SheetTitle className="text-primary text-2xl font-bold">Your Cart</SheetTitle>
                <SheetDescription className="text-muted-foreground">
                  Books you added to your cart
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-3 max-h-[70vh] overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground mt-10">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((book) => (
                    <Card key={book.title} className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          <img
                            className="h-24 w-18 object-cover rounded-md"
                            src={book.img}
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">{book.title}</p>
                            <p className="text-sm text-gray-600">
                              Price: ${book.price}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => decreaseQty(book.title)}
                                className="h-7 w-7"
                              >
                                <Minus />
                              </Button>

                              <span className="font-semibold">
                                {book.quantity}
                              </span>

                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => increaseQty(book.title)}
                                className="h-7 w-7"
                              >
                                <Plus />
                              </Button>
                            </div>

                            <p className="text-sm font-semibold mt-1">
                              Total: ${book.price * book.quantity}
                            </p>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(book.goodread_id)}
                        >
                          <Trash2 className="h-5 w-5 text-chart-1" />
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-primary">Total Amount:</span>
                    <span className="text-primary">${totalAmount.toFixed(2)}</span>
                  </div>
                  <Button className="w-full mt-4 text-lg py-6 text-background">Checkout</Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
