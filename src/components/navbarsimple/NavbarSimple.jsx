import Link from "next/link"

const NavbarSimple = () => {
  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-40 px-6 py-3 flex justify-between items-center">
    <div className="flex items-center space-x-4">
    </div>

    {/* Menu */}
    <ul className="flex items-center space-x-6">
      <li>
        <Link
          href="/"
          className="text-gray-200 font-bold hover:text-cyan-500 border-b-4 border-transparent hover:border-cyan-500 transition"
        >
          HOME
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default NavbarSimple