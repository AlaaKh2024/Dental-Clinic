import { Hospital, Link, Menu,PhoneCall, X } from 'lucide-react';
import React, { useState } from 'react'

const navList =[
  {href :'#home',label:'Home'},
  {href :'#services',label:'Services'},
  {href :'#about',label:'About'},
  {href :'#tips',label:'Tips'},
  {href :'#book',label:'Book Appointment'},
  {href :'#testimonials',label:'Testimonials'},

];

const Header = () => {
const [isMenuOpen,setIsMenuOpen]= useState(false);

  return (
   <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
    <div className='container mx-auto flex items-centre justify-between py-4 px-4 lg:px-8'>
      <div className='flex items-center space-x-2'>
        <Hospital className='w-8 h-8 text-sky-600'/>
        <span className='text-xl font-bold text-sky-600'>Smile Dental Clinic</span>
      </div>
      <nav className='hidden md:flex space-x-6 text-gray-700 font-medium'>
        {navList.map((Link)=>(
          <a href={Link.href} key={Link.href} className='hover:text-sky-600 transition'>
            {Link.label}
          </a>
          ) )}
           </nav>
           <div className='hidden md:flex items-center space-x-2 '>
            <PhoneCall className='text-sky-600'/>
            <a  href='#' className='bg-sky-600 text-white px-4 py-2 rounded-xl 
            hover:bg-sky-700 transition text-sm'>
              Book Appointment
            </a>
            </div>
            <div className='md:hidden'>
              <button onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? < X className='text-gray-700'/>: < Menu className='text-gray-700'/>}
              </button>

            </div>

    </div>

    {
      isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 shadow-md
        px-4 py-4 space-y-3 text-gray-700 font-medium'>
           {navList.map((Link)=>(
          <a href={Link.href}
           key={Link.href} 
           className=' block hover:text-sky-600 transition'
           onClick={()=>setIsMenuOpen(false)}>
            {Link.label}
          </a>
          ) )}

        </div>
      ) }

   </header>
  );
}

export default Header