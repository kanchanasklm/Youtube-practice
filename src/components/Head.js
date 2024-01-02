

// import React from "react";
// import { toggleMenu } from "../utils/appSlice";
// import { useDispatch } from "react-redux";

// const Head=()=>{
//  const dispatch=useDispatch();
//     const toggleMenuHandler=()=>{
//         dispatch(toggleMenu())
//     }
//     return(
//        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
//         <div className="flex col-span-1">
//             <img 
//             onClick={()=>toggleMenuHandler()}
//             className="h-8 cursor-pointer"
//             alt="menu"
//             src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"/>
//             <a href="/">
//             <img 
//             className="h-8 mx-2"
//             alt="youtube-logo" 
//             src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
//             </a>
//         </div>

//         <div className="col-span-10 px-10">
//             <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
//             <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
//         </div>

//         <div className="col-span-1">
//             <img 
//             className="h-8"
//             alt="user"
//             src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>

//         </div>
//        </div>
//     )
// };

// export default Head;


import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch=useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className='shadow-lg flex justify-between px-5 py-5'>
        <div className='flex px-2'>
            <img 
            onClick={()=>toggleMenuHandler()}
            className='w-10 mr-2 cursor-pointer'
            alt="hamburger menu" 
            src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"/>

            <a href="/">
            <img 
            className='w-16'
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
            </a>
        </div>

        <div>
            <input type='text'/>
            <button>🔍</button>
        </div>

        <div>
            <img 
            className='w-10'
            alt="user"
            src='https://www.nicepng.com/png/full/128-1280406_user-icon-png.png'/>

        </div>

    </div>
  )
}

export default Head;