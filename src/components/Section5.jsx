import React from 'react'
import foodPhoto from '../assets/Rectangle 47.png'

const Section5 = () => {
  return (
    <section id="download" className="relative overflow-hidden px-5 py-16 text-center sm:py-24">
      <img src={foodPhoto} alt="A warm kitchen ready for your next meal" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative mx-auto max-w-3xl text-white"><h2 className="text-3xl font-bold sm:text-4xl">Download the app now</h2><p className="mx-auto mb-8 mt-4 max-w-xl text-base text-white/85 sm:text-lg">Get the meals you love delivered quickly. Start your next order today.</p><div className="flex flex-col justify-center gap-3 min-[420px]:flex-row"><a href="#download" className="rounded-full bg-orange-600 px-8 py-3 text-sm font-semibold text-white hover:bg-orange-700">Playstore</a><a href="#download" className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10">App store</a></div></div>
    </section>
  )
}

export default Section5
