
import { Bell, Search, UserRound } from 'lucide-react'

function Navbar() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-gray-200 bg-white px-8">

      <div className="relative w-80">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-400"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-indigo-600">
          <Bell size={21} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
            <UserRound size={19} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              User
            </p>
            <p className="text-xs text-gray-500">
              Workspace member
            </p>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Navbar
