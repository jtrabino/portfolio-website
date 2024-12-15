export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-6 top-0 sticky bg-[#oaoaoa] opacity-85">
      <div className="flex items-center space-x-24">
        <a href="/" className="text-lg font-medium">
          jtrabino.
        </a>
        <a href="/work" className="text-lg font-semibold">
          Projects
        </a>
      </div>
    </nav>
  )
}