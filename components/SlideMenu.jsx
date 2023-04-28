import React from 'react'
import {rec_channels,top_channels} from '../data/mock-data'
import {RiMovieLine} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'
import Image from 'next/image'

const SlideMenu = () => {
  return (
    <div className='fixed -my-1 w-14 sm:w-16 xl:w-[15rem] h-screen overflow-y-scroll custom-scrollbar p-2 bg-[#1f1f23]'>
      <div>
        <p className='hidden xl:flex uppercase mx-2 my-2 font-bold text-sm'>For You:</p>
        <p><RiMovieLine size={20} className=' xl:hidden justify-center w-full'/></p>
      </div>
      {rec_channels.map((item,index)=>(
        <div className='inline-flex items-center w-full py-[2px]' key={index}>
          <div>
            <Image src={item.avatar} width='50' height="50" alt=''/>
          </div>
          <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>{item.username}</p>
              <p className='text-gray-400'>{item.game_name}</p>
            </div>
            <p className='flex font-semibold items-center'><BsDot color='red' size={35}/>{item.rank}k</p>
          </div>

        </div>
      ))} 
            <div>
        <p className='hidden xl:flex uppercase mx-2 my-2 font-bold text-sm'>recommended Streems:</p>
        <p><RiMovieLine size={20} className=' xl:hidden justify-center w-full'/></p>
      </div>
      {top_channels.map((item,index)=>(
        <div className='inline-flex items-center w-full py-[2px]' key={index}>
          <div>
            <Image src={item.avatar} width='50' height="50" alt=''/>
          </div>
          <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>{item.username}</p>
              <p className='text-gray-400'>{item.game_name}</p>
            </div>
            <p className='flex font-semibold items-center'><BsDot color='red' size={35}/>{item.rank}k</p>
          </div>

        </div>
      ))} 

    </div>
  )
}

export default SlideMenu