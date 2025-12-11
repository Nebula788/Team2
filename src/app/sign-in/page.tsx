import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconBrandApple, IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";


const Page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brandBg px-4">
      <Card className="p-8 w-full max-w-md shadow-xl border border-primary bg-white/90 backdrop-blur ">
        
          <h2 className="text-2xl font-semibold text-brandDark text-center mb-6">
            Sign In
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-brandDark">
                Email
              </label>
              <Input type="email" placeholder="Enter email" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-brandDark">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter password"
                className="mt-1"
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm">
                  Remember me
                </label>
              </div>

              <Link
                href="/sign-up"
                className="text-sm underline text-brandAccent"
              >
                Don't have an account?
              </Link>
            </div>

            <Button className="mt-2 bg-primary hover:bg-brandAccentHover text-background">
              Sign In
            </Button>

            <div className="flex items-center gap-2 mt-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="p-3 rounded-full border-brandBorder">
              <IconBrandGoogle/>
            </Button>
            <Button variant="outline" className="p-3 rounded-full border-brandBorder">
              <IconBrandApple/>
            </Button>
            <Button variant="outline" className="p-3 rounded-full border-brandBorder">
              <IconBrandFacebook/>
            </Button>
          </div>
          
        </div>
      </Card>
    </div>
  );
};

export default Page;
