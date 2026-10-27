import logo from '../assets/left.png'
import foodPhoto from '../assets/Rectangle 48.png'

function Header() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-12">
        <a href="#home" aria-label="Food for Everyone home"><img className="w-36 sm:w-44" src={logo} alt="Food for Everyone" /></a>
        <nav aria-label="Main navigation" className="flex items-center gap-3 text-xs font-semibold sm:gap-7 sm:text-sm md:gap-10">
          <a className="text-orange-600" href="#home">Home</a>
          <a className="text-slate-800 transition hover:text-orange-600" href="#product">Product</a>
          <a className="text-slate-800 transition hover:text-orange-600" href="#faq">FAQ</a>
          <a className="text-slate-800 transition hover:text-orange-600" href="#contact">Contact</a>
        </nav>
      </header>
      <section id="home">
        <div className="relative flex min-h-[480px] items-center justify-center px-5 py-16 text-center sm:min-h-[540px] sm:py-20">
          <img src={foodPhoto} alt="Freshly prepared food" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="relative z-10 mx-auto max-w-4xl text-white">
            <p className="mb-4 text-sm font-semibold tracking-wide sm:text-lg">Food for Everyone</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">Why stay hungry when you can order from Bella Onijio</h1>
            <p className="mx-auto mb-8 mt-5 max-w-2xl text-base text-white/85 sm:text-xl">Your favorite meals, freshly made and delivered right to your door.</p>
            <div className="flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <a href="#download" className="rounded-full bg-orange-600 px-8 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700">Playstore</a>
              <a href="#download" className="rounded-full border border-white px-8 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">App store</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
