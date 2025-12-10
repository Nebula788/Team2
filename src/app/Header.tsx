// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, ShoppingCart, Trash2, User } from "lucide-react";
// import Link from "next/link";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Card } from "@/components/ui/card";
// import { cartAtom } from "@/atoms/cartAtom";
// import { useAtom } from "jotai";

// const Header = () => {
//   const [cart, setCart] = useAtom(cartAtom);
//   return (
//     <>
//       <div
//         className="bg-primary flex items-center justify-between px-10
//        h-20 fixed left-0 right-0 top-0 z-5 "
//       >
//         <div className="flex items-center gap-2 duration-200 hover:scale-[1.1]">
//           <Link href={"/"} className="flex items-center gap-2 ">
//             <span className="text-4xl font-bold text-secondary text-shadow-primary-foreground text-shadow-2xs">
//               Book
//             </span>
//             <p className="text-l font-semibold">Store</p>
//           </Link>
//         </div>
//         <div className="flex gap-2 ">
//           <Input
//             className="w-40 bg-background  hover:bg-secondary-foreground"
//             type="text"
//             placeholder=" Search"
//           ></Input>
//           <Link href={"/sign-in"}>
//             <Button variant={"outline"} className="bg-primary-foreground">
//               <User />
//             </Button>
//           </Link>
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button
//                 variant={"outline"}
//                 className="cursor-pointer bg-primary-foreground"
//               >
//                 <ShoppingCart />
//               </Button>
//             </SheetTrigger>
//             <SheetContent className="w-full sm:max-w-[600px]">
//               <SheetTitle>Your Cart</SheetTitle>
//               <SheetDescription></SheetDescription>
//               <SheetHeader>
//                 <div>
//                   {cart.map((book) => (
//                     <Card className="px-2">{book.title}</Card>
//                   ))}
//                 </div>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

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

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <header className="bg-primary/95 backdrop-blur-md border-b-2 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="h-20 px-8 flex items-center justify-between">
        
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-105 transition"
        >
          <span className="text-4xl font-bold text-secondary drop-shadow-md">
            Book
          </span>
          <p className="text-lg font-semibold text-primary-foreground">Store</p>
        </Link>

        
        <div className="relative hidden sm:flex items-center">
          <Search className="absolute left-3 text-foreground w-4 h-4" />
          <Input
            placeholder="Search books..."
            className="pl-9 w-56 bg-background hover:bg-secondary transition"
          />
        </div>

        
        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="bg-primary-foreground hover:bg-secondary"
            >
              <User />
            </Button>
          </Link>

          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="bg-primary-foreground hover:bg-secondary relative"
              >
                <ShoppingCart />

                
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-chart-1 text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-[520px]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold">
                  Your Cart
                </SheetTitle>
                <SheetDescription>
                  Review your selected books before checkout.
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-10">
                    Your cart is empty 🛒
                  </p>
                ) : (
                  cart.map((book) => (
                    <Card
                      key={book.id}
                      className="p-4 flex justify-between items-center hover:bg-secondary"
                    >
                      <div>
                        <h3 className="font-semibold">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${book.price || "0.00"}
                        </p>
                      </div>

                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(book.id)}
                      >
                        <Trash2 size={18} />
                      </Button>
                    </Card>
                  ))
                )}
              </div>

              
              {cart.length > 0 && (
                <div className="mt-6 p-4 border-t">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <Button className="w-full mt-4">Checkout</Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
