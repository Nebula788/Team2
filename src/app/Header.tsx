import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-accent'>
      <div className='flex items-center justify-between px-10 border-b-1'>
        <div className='flex items-center gap-2 '>
            <Link href={'/'}  className='flex items-center gap-2 '>
            <img src='nmtec-erxes-18-04.svg' className='h-[48px]'></img>
            <p className='text-l font-semibold'>Academy</p>
            </Link>
        </div>
        <div className='flex gap-2 '>
        <Input className='w-40' type='text' placeholder=' Search'></Input>
        <Link href={"/cart"}><Button variant={'outline'}><ShoppingCart/></Button></Link>
        <Link href={'/sign-in'}
        ><Button variant={'outline'}><User/></Button></Link>
      </div>
      </div>
      
    </div>
  )
}

export default Header

