import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Icon, Mail } from 'lucide-react'
import { Link } from 'lucide-react'
const page = () => {
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brandBg px-4">
      <Card className="p-8 w-full max-w-md shadow-xl border border-brandBorder/40 bg-white/90 backdrop-blur">
        <h2 className="text-2xl font-semibold text-brandDark text-center mb-6">
          Create an Account
        </h2>

        <div className="flex flex-col gap-4">
          
          <div>
            <label className="text-sm font-medium text-brandDark">Email</label>
            <div className="relative mt-1">
              <Mail className="size-4 absolute top-1/2 -translate-y-1/2 left-3 text-brandDark/60" />
              <Input
                type="email"
                placeholder="Enter email"
                className="pl-10"
              />
            </div>
          </div>

         
          <div>
            <label className="text-sm font-medium text-brandDark">Password</label>
            <Input type="password" placeholder="Enter password" className="mt-1" />
          </div>

          
          <div>
            <label className="text-sm font-medium text-brandDark">Full Name</label>
            <Input type="text" placeholder="Enter full name" className="mt-1" />
          </div>

         
          <Button className="mt-2 bg-brandAccent hover:bg-brandAccentHover text-white">
            Sign Up
          </Button>

          <div className="flex items-center gap-2 mt-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="p-3 rounded-full border-brandBorder">
              <img src={"/Gmail_icon_(2020).svg.png"} className="size-6" />
            </Button>

            <Button variant="outline" className="p-3 rounded-full border-brandBorder">
              <img src={"/apple-icon-4.png"} className="size-6" />
            </Button>

            <Button variant="outline" className="p-3 rounded-full border-brandBorder">
              <img src={"/facebook-logo.png"} className="size-6" />
            </Button>
          </div>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-brandAccent underline">
              Sign In
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default page
