import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <RadioGroup defaultChecked defaultValue="default">
        <RadioGroupItem value="default"></RadioGroupItem>
        <RadioGroupItem value="first"></RadioGroupItem>
        <RadioGroupItem value="second"></RadioGroupItem>
      </RadioGroup>
    </div>
  );
};

export default Page;
