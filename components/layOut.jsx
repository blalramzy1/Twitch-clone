import React from 'react'
import Main from './main'
import SlideMenu from './SlideMenu'

const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
        <SlideMenu />
        <Main />
    </div>
  )
}

export default Layout