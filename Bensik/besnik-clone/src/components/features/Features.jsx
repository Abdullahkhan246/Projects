import React from 'react'

export default function Features({data}) {
  console.log(data)
  return (
    <>
    <div  className="flex flex-col justify-center items-center mb-4">
     <img src={data.icon} className="text-4xl mb-4 "/>
      
            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
            <p className="text-gray-600">{data.description}</p>
    </div>
    </>
  )
}
