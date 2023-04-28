import Image from 'next/image'
import React from 'react'

const CategoriesItem = ({img,title,viewers,tag1,tag2}) => {
  return (
    <div className='p-2'>
        <Image src={img} className=' rounded-md' width="261" height='350' alt=''/>
        <div>
            <p className='text-bold py-1'>{title}</p>
            <p className='text-sm text-gray-500 py-[2px]'>{viewers}</p>
            <div className='flex px-1'>
               <div>
                <p className='text-sm bg-gray-700 rounded-full inline-block p-1 px-3'>{tag1}</p>
            </div>
           {tag2 ?  
           <div>
                <p className='text-sm bg-gray-700 rounded-full inline-block p-1 px-3'>{tag2}</p>
            </div> : null} 
            </div>
        </div>
    </div>
  )
}

export default CategoriesItem