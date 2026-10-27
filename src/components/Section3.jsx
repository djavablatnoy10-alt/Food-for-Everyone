import React from 'react'
import screen from '../assets/desktop Hero Light 9.png'

const Section3 = () => {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-8 sm:px-8 md:grid-cols-2 md:gap-16 md:py-12">
      <img className="mx-auto w-full max-w-[420px] object-contain md:order-2" src={screen} alt="Explore meals screen" loading="lazy" />
      <div className="text-center md:text-left"><p className="mb-3 text-lg font-bold text-orange-600 sm:text-xl">Explore varieties</p><h3 className="text-2xl font-bold leading-snug text-slate-800 sm:text-3xl lg:text-4xl">Shop for your favorite meals</h3><p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">Browse a delicious variety of meals and drinks, and find something you will love.</p></div>
    </section>
  )
}

export default Section3
