import React from 'react'

export default function NavbarLinks({links}) {
    console.log(links)
  return (
     <div className="group inline-block relative cursor-pointer">
     <li>
        <a href="#" className='font-medium'>{links}</a>
    </li>
    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-sky-950 transition-all duration-200 group-hover:w-full sm:group-hover:w-14"></span>
    </div>
  )
}
