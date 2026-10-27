import logo from '../assets/left.png'

function Footer() {
  return (
    <footer id="contact" className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8 lg:px-12">
      <a href="#home" aria-label="Back to top"><img className="w-36" src={logo} alt="Food for Everyone" /></a>
      <div className="flex items-center gap-5 text-orange-600" aria-label="Social media">
        <a className="text-sm font-bold hover:text-orange-800" href="https://twitter.com" aria-label="Twitter">𝕏</a>
        <a className="text-sm font-bold hover:text-orange-800" href="https://facebook.com" aria-label="Facebook">f</a>
        <a className="text-sm font-bold hover:text-orange-800" href="https://instagram.com" aria-label="Instagram">◎</a>
      </div>
      <p className="text-xs text-slate-500">Copyright © 2026 Food for Everyone</p>
    </footer>
  )
}

export default Footer
