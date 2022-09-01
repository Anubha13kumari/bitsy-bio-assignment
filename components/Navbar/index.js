import React from 'react'
import Logo from '../../assets/Bitsy_bio.png';
import Image from 'next/image'

function Navbar() {
  return (
    <div className='bg-black '>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-9">
    <Image src={Logo}></Image>
    
  </div>
  {/* <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> */}
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow flex justify-center">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  text-purple mr-6 hover:text-3xl">
        Explore
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-6 hover:text-3xl">
        Why Bitsy.bio?
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-6 hover:text-3xl">
        About Us
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white hover:text-3xl">
        Contact
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-purple  mt-4 lg:mt-0 mr-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink">Login</a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-purple  mt-4 lg:mt-0 bg-purple mr-7 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink" >Get Started</a>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar