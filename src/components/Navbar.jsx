import React from 'react'
import { useState } from 'react'
import {Menu , X} from "lucide-react"
import { navItems } from '../constants'
import Logo from '../assets/logo.png'

const Navbar = () => {
   const [mobileDrawerOpen,setMobiledrawerOpen]= useState(false);
   const toggleNavbar = ()=>{
      setMobiledrawerOpen(!mobileDrawerOpen);
   }
  return (
    <nav className="sticky top-0 z-50 py-3 bg-neutral-900/60 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
         <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
               <img className='h-10 w-10 mr-2' src={Logo} alt="Logo"/>
               <span className='text-xl tracking-tight'>VirtualR</span>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
               {navItems.map((item,index)=>(
                  <li key={index}>
                     <a href={item.href}>{item.label}</a>
                  </li>
               ))}
            </ul>
            <div className='hidden lg:flex justify-center space-x-12 items-center'>
               <a href="#" className="py-2 px-3 border rounded-md ">
                  Sign In
               </a>
               <a href="#"
               className='bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 rounded-md'>
                  Create an account
               </a>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
               <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X/> : <Menu/>}

               </button>
            </div>
         </div>
         {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
               <ul>
                  {navItems.map((item,index)=>(
                     <li key={index} className='flex justify-center py-4'>
                        <a href={item.href}>{item.label}</a>
                     </li>
                  ))}
                  
               </ul>
               <div className="flex space-y-4 md:space-x-6 flex-col md:flex-row">
                   <a href="#" className="flex justify-center py-2 px-3 border rounded-md">
                     Sign In
                   </a>
                   <a
                     href="#"
                     className='py-2 px-3 md:py-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'
                   >Create an Account</a>
               </div>
            </div>

         )}
      </div>
    </nav>
  )
}

export default Navbar