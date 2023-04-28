import React,{Fragment} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsThreeDotsVertical,} from 'react-icons/bs'
import { Menu,Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

const Menuitems = () => {
  return (
    <div className='p-2 items-center justify-center'>
       <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <div className=' rounded-full hover:bg-slate-800 p-2'>
                    <BsThreeDotsVertical size={20} />
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
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                    <div>
                        <h2 className=' px-2 pt-2 text-[#6f6f77]'>GENERAL</h2>
                    </div>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
    </div>
   )
}

export default Menuitems