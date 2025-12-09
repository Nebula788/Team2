import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Icon, Mail } from 'lucide-react'
const page = () => {
  return (
    <div>
      <div  className="flex flex-col justify-center bg-accent h-screen w-full gap-5 items-center mx-auto">
         <Card className="p-5 h-fit w-[391.219px] ">
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
        <p> or</p>
        <div className='flex gap-5'>
          <Button variant={'outline'}><img src={'Gmail_icon_(2020).svg.png'} className='size-6'/></Button>
          <Button variant={'outline'}><img src={'apple-icon-4.png'} className='size-6'/></Button>
          <Button variant={'outline'}><img src={'facebook-logo.png'} className='size-6'/></Button>
        </div>
      </div>
    </div>
  )
}

export default page
