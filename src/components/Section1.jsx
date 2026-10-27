import React from 'react'
import phones from '../assets/Group 53.png'

const Section1 = () => {
  return (
    <section id="product" className="relative z-10 -mt-24 pb-8 sm:-mt-32">
      <div className="mx-auto flex w-full max-w-[440px] justify-center px-4">
        <img className="relative w-full max-w-[380px] -translate-x-6 -translate-y-10 object-contain drop-shadow-xl sm:-translate-x-8 sm:-translate-y-12" src={phones} alt="Screens from the Food for Everyone app" />
      </div>
      <h2 className="mt-6 px-4 text-center text-2xl font-semibold text-slate-800 sm:mt-10 sm:text-3xl">How the app works</h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-500" />
    </section>
  )
}

export default Section1
