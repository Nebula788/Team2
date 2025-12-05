import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";
import { Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center bg-accent h-screen w-full gap-5 items-center mx-auto">
        <Card className="p-5 h-fit">
          <div className="flex flex-col gap-5">
            <p>Email</p>
            <div>
              <Input
                type="text"
                placeholder="Enter email"
              ></Input>
            </div>
            <p>Password</p>
            <Input type="text" placeholder="Enter password"></Input>
            <div className="flex justify-between gap-10">
              <div className="flex items-center gap-2">
              <Checkbox></Checkbox>
              <p>remember me</p>
            </div>
              <Link href={'/sign-up'} className="underline">You don't have an account yet?</Link>
            </div>
            <Button>Sign In</Button>
          </div>
        </Card>
        <p> or</p>
                <div className='flex gap-5'>
                  <Button variant={'outline'}><img src={'Gmail_icon_(2020).svg.png'} className='size-6'/></Button>
                  <Button variant={'outline'}><img src={'apple-icon-4.png'} className='size-6'/></Button>
                  <Button variant={'outline'}><img src={'facebook-logo.png'} className='size-6'/></Button>
                </div>
      </div>
    </div>
  );
};

export default Page;
