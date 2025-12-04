import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";
import { Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-accent h-screen w-full gap-5 items-center mx-auto">
        <Card className="p-5 h-fit">
          <div className="flex flex-col gap-5">
            <p>Email</p>
            <div className="relative">
              <Mail className="size-4 absolute top-[50%] -translate-[50%] left-5" />
              <Input
                type="text"
                className="pl-10"
                placeholder="Enter email"
              ></Input>
            </div>
            <p>Password</p>
            <Input type="text" placeholder="Enter password"></Input>
            <div className="flex items-center gap-2">
              <Checkbox></Checkbox>
              <p>remember me</p>
            </div>
            <Button>Sign In</Button>
          </div>
        </Card>
        <Card className="p-5 h-fit">
          <div className="flex flex-col gap-5">
            <p>Email</p>
            <div className="relative">
              <Mail className="size-4 absolute top-[50%] -translate-[50%] left-5" />
              <Input
                type="text"
                className="pl-10"
                placeholder="Enter email"
              ></Input>
            </div>
            <p>Password</p>
            <Input type="text" placeholder="Enter password"></Input>
            <p>Name</p>
            <Input type="text" placeholder="Enter FullName"></Input>
            <Button>Sign Up</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
