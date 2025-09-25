import React, { useState } from 'react'
import { FaSearchengin } from "react-icons/fa6";
import logo from '../../assets/logo.svg'

import { Link } from 'react-router'
// import { FaBed, FaBath, FaHeart } from "react-icons/fa";
import heroImage from "../../assets/hero-image.png"
import sponsor1 from "../../assets/sponsor1.png"
import sponsor2 from "../../assets/sponsor2.png"
import sponsor3 from "../../assets/sponsor3.png"
import sponsor4 from "../../assets/sponsor4.png"
import sponsor5 from "../../assets/sponsor5.png"
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import Features from '../../components/features/Features'
import image1 from "../../assets/iamge-22.png"
import image2 from "../../assets/image.png"
import image3 from "../../assets/image-1.png"
import image4 from "../../assets/image-2.png"
import small1 from "../../assets/icon1.png"
import small2 from "../../assets/icon2.png"
import small3 from "../../assets/icon4.png"

import HomeCards from '../../components/homecards/HomeCards'

export default function Home() {


  const sponsors = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5
  ]
  const features = [
    {
      title: 'Find a home',
      description: 'Our advanced search helps you find a perfect match in seconds.',
      icon: icon1,
    },
    {
      title: 'Trusted agents',
      description: 'We connect you with verified and professional agents.',
      icon: icon2,
    },
    {
      title: 'Easy process',
      description: 'We’ve simplified buying and renting properties for everyone.',
      icon: icon3,
    },
  ]

  //Home Cards
  const homeCards = [{
    image: image1,
    price: "259,000",
    title: "Case Alda",
    location: "Co Rd Tribune, Tribune",
    beds: 3,
    baths: 2,

  },
  {
    image: image2,
    price: "259,000",
    title: "Case Alda",
    location: "Co Rd Tribune, Tribune",
    beds: 3,
    baths: 2
  },

  {
    image: image3,
    price: "259,000",
    title: "Case Alda",
    location: "Co Rd Tribune, Tribune",
    beds: 3,
    baths: 2
  },

  {
    image: image4,
    price: "259,000",
    title: "Case Alda",
    location: "Co Rd Tribune, Tribune",
    beds: 3,
    baths: 2
  },


  ]





  const testimonials = [
    {
      id: 1,
      name: 'Johnson',
      title: 'Home Buyer',
      message:
        'Besnik helped me find my dream home in just two weeks. Amazing support and great listings!',
      image: small1,
    },
    {
      id: 2,
      name: 'John Smith',
      title: 'Real Estate Agent',
      message:
        'The platform is user-friendly and connects me with serious buyers quickly.',
      image: small2,
    },
    {
      id: 3,
      name: 'Sajid Khan',
      title: 'Property Seller',
      message:
        'I sold my house within days thanks to Besnik’s great exposure and tools.',
      image: small3,
    },
  ];


  const footer = [{
    title: 'Popular searches',
    link1: 'Apartment for Rent',
    link2: 'Apartment Low To High',
    link3: 'Offices for Buy',
    link4: 'Offices for Rent'
  }, {
    title: 'About Us',
    link1: 'Our Story',
    link2: 'Team member',
    link3: 'Career',
    link4: 'contact us'
  },
  {

    title: 'Quick Links',
    link1: 'Terms of Use',
    link2: 'Privacy Policy',
    link3: 'Contact Support',
    link4: 'FAQs'
  }, {
    title: 'Support',
    Link1: 'Help Center',
    link2: 'Loan Supper',
    link3: 'Management',
    link4: 'Privacy Policy'
  }]

  const [activeId, setActiveId] = useState(1);
  const activeTestimonial = testimonials.find((t) => t.id === activeId);
  return (
    <>
      <section className="mt-16 px-4 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary">
              Search for Homes in your Neighborhood
            </h1>
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Online Estate Agency, the modern way to sell your own home. You can use Griffin Residential to market your property.
            </p>
            {/* Form Section */}
            <div className="mt-6 border border-gray-200 rounded-md p-4 sm:flex items-center justify-between sm:gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-lg font-medium text-primary">Address</h2>
                <p className="text-gray-500">587 Bridgeton Road</p>
              </div>
              <div className="mb-4 sm:mb-0">
                <h2 className="text-lg font-medium text-primary">City
                </h2>
                <p className="text-gray-500">El Paso, Texas</p>
              </div>
              <button className="px-5 py-2 rounded bg-amber-500 text-white font-semibold transition-all duration-300 ease-in-out hover:bg-amber-500 hover:shadow-lg hover:scale-105 shadow cursor-pointer">
                Search
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="text-center">
            <img
              src={heroImage}
              alt="Hero"
              className="max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>


      <section className="mt-12 px-4 max-w-7xl mx-auto text-center">
        <p className="text-gray-500 mb-6 text-lg font-medium">
          Trusted by the world’s best
        </p>

        <div className="flex flex-nowrap overflow-x-auto items-center justify-center gap-8 sm:gap-12 scroll-smooth px-2">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="h-10 sm:h-14 object-contain min-w-[100px]" // optional: control width
            />
          ))}
        </div>
      </section>


      <section className="mt-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="mb-10 text-center font-inter text-4xl font-medium text-primary-dark sm:mb-28 sm:text-5xl">What Can We Help You Find?

        </h2>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <Features
              key={index}
              className="p-6 rounded-lg border hover:shadow-md transition"
              data={feature}
            />
          ))}
        </div>

      </section>

      <section className="mt-20 px-4 max-w-7xl mx-auto text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left Side: Heading + Paragraph */}
          <div className="text-left ">
            <h2 className="text-5xl font-bold text-primary mb-4 max-w-lg">
              More than just a real estate platform
            </h2>
            <p className="text-gray-600 max-w-lg">
              We provide all-in-one solutions for home buyers and sellers. Everything is designed to save you time and effort.
            </p>
          </div>

          {/* Right Side: Animated Button */}
          <div className="mt-6 lg:mt-0">
            <button className="px-5 py-2 rounded bg-amber-500 text-white font-semibold transition-all duration-300 ease-in-out hover:bg-amber-500 hover:shadow-lg hover:scale-105 shadow cursor-pointer animate-bounce">
              Get Started
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">

          {
            homeCards.map((cardsdata, index) => {
              return (
                <HomeCards
                  key={index}
                  data={cardsdata}

                />)
            })
          }

        </div>
      </section>
      <section className="mt-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">What our customers say</h2>

        {/* Testimonial Card */}
        <div className="bg-white shadow-md p-8 rounded-lg transition-all duration-300">
          <img
            src={activeTestimonial.image}
            alt={activeTestimonial.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <p className="text-gray-600 italic max-w-xl mx-auto mb-4">
            "{activeTestimonial.message}"
          </p>
          <h3 className="font-bold text-lg">{activeTestimonial.name}</h3>
          <p className="text-gray-500 text-sm">{activeTestimonial.title}</p>
        </div>

        {/* Profile Image Switcher */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {testimonials.map((t) => (
            <img
              key={t.id}
              src={t.image}
              alt={t.name}
              onClick={() => setActiveId(t.id)}
              className={`w-16 h-16 rounded-full object-cover cursor-pointer border-2 transition transform 
  ${t.id === activeId ? 'border-primary scale-110 animate-bounce' : 'border-gray-300 hover:scale-105'}`}

            />
          ))}
        </div>
      </section>

     <section className="my-20 bg-amber-600 py-16 md:py-32">
  <div className="mx-auto max-w-5xl px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
    
    {/* Left Text Content */}
    <div className="max-w-lg space-y-4 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl text-white font-bold">
        Talk to a Redfin Agent
      </h1>
      <p className="text-white">
        Start your search with an expert local agent—there’s no pressure or obligation.
      </p>
    </div>

    {/* Search Input */}
    <div className="w-full md:w-auto">
      <p className="mb-2 text-white text-center md:text-left">
        Where are you searching for homes?
      </p>
      <label className="flex h-12 w-full sm:min-w-[300px] overflow-hidden rounded-lg bg-white shadow-md">
        <input
          type="text"
          placeholder="Address, City, Zip"
          className="grow bg-transparent px-3 text-black outline-none"
        />
        <div className="flex items-center justify-center bg-amber-300 px-4">
          <FaSearchengin className="w-6 h-6 text-gray-700" />
        </div>
      </label>
    </div>
  </div>
</section>




      <footer className="mx-auto max-w-5xl py-20 px-5">
  <div className="flex flex-col gap-10">
    
    {/* Top Links Section */}
    <div className="flex flex-wrap justify-center md:justify-between gap-10">
      {footer.map((data, index) => (
        <div key={index} className="min-w-[150px] text-center md:text-left">
          <h3 className="mb-6 font-inter text-2xl font-medium text-primary-dark">
            {data.title}
          </h3>
          <ul className="space-y-3">
            <li className="cursor-pointer text-primary-para">{data.link1}</li>
            <li className="cursor-pointer text-primary-para">{data.link2}</li>
            <li className="cursor-pointer text-primary-para">{data.link3}</li>
            <li className="cursor-pointer text-primary-para">{data.link4}</li>
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom Logo + Copyright */}
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:items-center">
      <img src={logo} alt="logo" className="h-10 w-auto" />
      <p className="text-sm text-gray-600 text-center">
        © 2021 Besnik. All Rights Reserved
      </p>
    </div>
  </div>
</footer>



    </>
  )
}
