import React,{useState,Fragment} from 'react'
import Logo from '../public/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import Menuitems from './Menuitems'
import { BsSearch,BsPerson } from 'react-icons/bs'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react';
import {BsThreeDotsVertical,} from 'react-icons/bs'
import { Menu,Transition } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const NavBar = () => {
  const [Nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!Nav)
  }
  const { data: session } = useSession();
  // console.log(session)
  return (
    <div className=' fixed h-14 w-full flex flex-nowrap items-center p-4 border-b-black border-b-2 bg-[#18181b] mb-[2px] z-10'>
      {/* Left side */}
      <div className='flex grow items-center justify-start'>
        <Link href='/'>
          <div className='flex cursor-pointer p-1'>
            <Image src={Logo} alt='' width='36' height='36' className='z-10' />
          </div>
        </Link>
        <div className='flex flex-row p-4 gap-x-4 font-bold items-center'>
          <p className='hover:text-[#6438aa] cursor-pointer'>Following</p>
          <p className='hover:text-[#6438aa] cursor-pointer'>Browse</p>
          <div>
            <Menuitems />
          </div>

        </div>
      </div>
      {/* middle side */}
      <div className='hidden relative md:flex grow-[2] -ml-20 items-center justify-center'>
        <div className=' bg-[#3d3d3f] text-white justify-end flex items-center max-w-[400px] w-full m-auto p-2 rounded-l-lg'>
          <div className='w-full'>
            <input type="text" className='bg-transparent font-semibold border-none w-full px-2 text-white focus:outline-none' 
            placeholder='Search'
            />
          </div>
          <div className='flex absolute justify-end'>
          <div className='mx-auto h-full px-3 py-3 cursor-pointer -mr-[51px] bg-[#2e2e35] rounded-r-lg'>
            <BsSearch className=''/>
          </div>
        </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
        {Nav 
        ? <AiOutlineClose size={28}/> 
        : <AiOutlineMenu size={25} />
         }
      </div>
      {/* right side */}
      <div className='hidden md:flex grow items-center justify-end'>
       {session 
       ? <div className='flex uppercase items-center justify-center gap-1 font-bold mx-4'>
          <p>welcome,</p>
          <Link href='/account'>
            <p className='uppercase hover:underline hover:text-[#6438aa]'>{session.user.name}</p>
          </Link>
          <Menu as='div' className='relative  text-left'>
            <div className='flex'>
              <Menu.Button>
                <div className=' rounded-full hover:bg-slate-800 -mr-5  p-2'>
                    <Image src={session.user.image}  alt="Profile Picture" width='45' height='45'className='rounded-full' />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                    <div>
                        <h2 className=' px-2 pt-2 text-[#6f6f77]'>GENERAL</h2>
                    </div>
                  
                  <Menu.Item>
                    {({ active }) => (
                      <a
                      href='account'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        href='#'
                        onClick={()=>signOut()}
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Logout
                      </p>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
       </div> 
       : <div className='flex items-center justify-center p-4'>
          <Link href='/account'>
          <button className='px-4 py-[6px] rounded-lg bg-[#9147ff] mr-2 hover:bg-[#7d4ec4] ease-in duration-300'>
            Account
          </button>
          </Link>
          <BsPerson size={30}/>
        </div>}
      </div>
      {/* Menu Mobile */}
      <div className={Nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300' : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'} >
        <ul className='text-center'>
          <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/'>Live Channels</Link>
          </li>
          <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/account'>Account</Link>
          </li>
          <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/account'>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
