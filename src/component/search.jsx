import React from 'react'
import Bhat from "/img1.png"
const Search = () => {
  return (
    <>
    <div className='ml-52'>
      <h1 className='text-3xl mt-20  font-black '>SEARCH RECIPES</h1>
      <input className='mt-8 w-[1100px] text-black border border-black p-2'
      src="text" placeholder='search for a recipe + hit enter'/>
    </div>
    <div className="bg-gray-200 shadow-lg mt-20 flex w-[70%] max-w-[1000px] mx-auto rounded-2xl overflow-hidden ">
  <img
    src={Bhat}
    alt="Bhat's Kitchen"
    className="w-1/3 rounded-full p-4 object-cover "
  />
  <div className="p-6 flex flex-col justify-center w-2/3">
    <h1 className="text-2xl font-bold text-gray-800  mb-4 text-center">
      ABOUT BHAT'S KITCHEN
    </h1>
    <p className="text-gray-600 text-xl leading-relaxed">
      I'm Venkatesh Bhat, author and owner of Bhat's Kitchen. I am a trained
      chef and passionate about good food, cooking for family and friends, and
      creating recipes that form lasting memories from one generation to the
      next.
    </p>
  </div>
</div>

    </>
  )
}

export default Search
