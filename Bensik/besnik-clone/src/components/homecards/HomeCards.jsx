import React from 'react'
import { FaBed, FaBath, FaHeart } from "react-icons/fa";

export default function HomeCards({ data }) {
    console.log(data);
    return (
        <>
            <div className="relative flex flex-col sm:flex-row bg-white p-6 rounded-md hover:shadow-md border border-gray-200 gap-4">
                {/* 1. Image */}
                <div className="order-1 sm:order-1 w-full sm:w-1/3">
                    <img
                        src={data.image}
                        alt="card"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="flex order-2 sm:order-2 flex-col items-center justify-between gap-5 pl-8 text-center sm:col-span-2 sm:items-start sm:text-left ">
                    <div className="mt-3 flex w-full justify-between items-center sm:mt-0 gap-4 sm:gap-48">
                        <h3 className="text-xl font-bold text-primary-light">
                            ${data.price}
                        </h3>

                        {/* Heart icon */}
                        <FaHeart className="text-red-400 cursor-pointer" />
                    </div>
                    {/* Title */}
                    <h2 className="text-2xl font-medium">{data.title}</h2>

                    {/* Location */}
                    <p className="text-gray-600">{data.location}</p>

                    {/* Icons */}
                    <div className="flex gap-6 text-gray-700">
                        <div className="flex items-center gap-2">
                            <FaBed /> {data.beds} Beds
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBath /> {data.baths} Bath
                        </div>
                    </div>

                    {/* Button */}
                    <div>
                        <button className="w-full sm:w-auto px-5 py-2 rounded bg-amber-500 text-white font-semibold hover:bg-amber-600">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
