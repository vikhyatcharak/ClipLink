import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='w-full bg-amber-900 h-15 px-4 py-3 flex items-center justify-between'>
        <div className="logo text-xl font-extrabold">
            <Link className='cursor-pointer' href='/'>PassClip</Link>
        </div>
        <div className="buttons flex list-none gap-3 items-center">
            <li className='cursor-pointer hover:opacity-[0.8]'><Link href='/yourUrls'>Your URLs</Link></li>
            <li className='cursor-pointer hover:opacity-[0.8]'><Link href='/AboutUs'>About Us</Link></li>
            <li className='cursor-pointer hover:opacity-[0.8]'><Link href='/Contact'>Contact Us</Link></li>
            <li className='cursor-pointer hover:opacity-[0.8]'><Link target='_blank' href='https://github.com/vikhyatcharak'>Github</Link></li>
            <li className='cursor-pointer hover:opacity-[0.8]'><Link href='/shorten'><button type="button" className="cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:focus:ring-yellow-900">Get Started</button></Link></li>
        </div>
      </div>
    </>
  )
}

export default Navbar
