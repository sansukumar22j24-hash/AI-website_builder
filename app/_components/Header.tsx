"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SignInButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
//import { Button } from '';
//import Button from 'next/button'; // adjust path as needed


const MenuOptions = [
  {
    name: 'Pricing',
    path: '/pricing'
  },
  {
    name: 'Contact',
    path: '/contact-us'
  },

]



const Header = () => {


  const { user } = useUser();
  return (
    <div className=' flex items-center justify-between p-4 shadow'>

      {/*logo  */}
      <div className='flex gap-2 items-center'>
        <Image src={'/logo.svg'} alt='logo' width={35} height={35} />

        <h2 className='font-bold text-xl'>Ai website Generator</h2>

      </div>
      {/* Menu option */}
      <div className='flex gap-3'>
        {MenuOptions.map((menu, index) =>
           (<Button variant={'ghost'} 
           key={index}>{menu.name}
           </Button>
          ))}
      </div>
      {/* get started Button */}
      
        <div>
  {!user ? (
    <Link href="/workspace">
      <Button>
        Get Started <ArrowRight />
      </Button>
    </Link>
  ) : (
    <SignInButton mode="modal" forceRedirectUrl="/workspace">
      <Button>
        Get Started <ArrowRight />
      </Button>
    </SignInButton>
  )}
</div>
      
            


        
      






    </div>
  )
}

export default Header
