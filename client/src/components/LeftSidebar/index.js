import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return(
    <div className="top-0 bottom-0 flex flex-col py-4 items-center leftShowLarge:items-start md:flex leftShowLarge:w-leftLarge w-leftSmall ">
      <div className="flex flex-row items-center text-2xl py-3 px-3 rounded-full font-semibold hover:bg-green-50">
        <div className="h-8 w-8 rounded-xl bg-green-200">
          
        </div>
        <div className="hidden leftShowLarge:ml-2 leftShowLarge:block">
          Home
        </div>
      </div>
      <div className="flex flex-row items-center text-2xl py-3 px-3 rounded-full font-semibold hover:bg-green-50">
        <div className="h-8 w-8 rounded-xl bg-green-200">
          
        </div>
        <div className="hidden leftShowLarge:ml-2 leftShowLarge:block">
          Explore
        </div>
      </div>
      <div className="flex flex-row items-center text-2xl py-3 px-3 rounded-full font-semibold hover:bg-green-50">
        <div className="h-8 w-8 rounded-xl bg-green-200">
          
        </div>
        <div className="hidden leftShowLarge:ml-2 leftShowLarge:block">
        <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar