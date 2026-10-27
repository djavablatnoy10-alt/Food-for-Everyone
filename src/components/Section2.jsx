import React from 'react'
import screen from '../assets/desktop Hero Light 5.png'

const Section2 = () => {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-8 sm:px-8 md:grid-cols-2 md:gap-16 md:py-12">
      <img className="mx-auto w-full max-w-[420px] object-contain" src={screen} alt="Create account screen" loading="lazy" />
      <div className="text-center md:text-left"><p className="mb-3 text-lg font-bold text-orange-600 sm:text-xl">Create an account</p><h3 className="text-2xl font-bold leading-snug text-slate-800 sm:text-3xl lg:text-4xl">Create/login to an existing account to get started</h3><p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">Sign up in moments with your email and a password. Your favorite food is just a few taps away.</p></div>
    </section>
  )
}

export default Section2
