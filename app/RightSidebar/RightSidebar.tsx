import React from 'react'
import Righttags from '../components/Righttags'

const RightSidebar = () => {
  return (
    <div className='flex justify-end'>
    <div className="h-screen bg-gray-100 w-20 flex flex-col">
          <Righttags/>
    </div>
    </div>

  )
}

export default RightSidebar
