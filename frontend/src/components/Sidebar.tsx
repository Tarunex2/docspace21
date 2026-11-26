
import {
  LayoutDashboard,
  Files,
  UploadCloud,
  MessageSquare,
  History,
  UserRound,
  Settings,
  LogOut,
  Layers3,
} from 'lucide-react'

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Documents', icon: Files },
    { name: 'Upload Documents', icon: UploadCloud },
    { name: 'AI Chat', icon: MessageSquare },
    { name: 'Chat History', icon: History },
  ]

  const preferences = [
    { name: 'My Profile', icon: UserRound },
    { name: 'Settings', icon: Settings },
  ]

  const renderItem = (item: (typeof navigation)[number]) => {
    const Icon = item.icon
    const isActive = activePage === item.name

    return (
      <button
        key={item.name}
        onClick={() => setActivePage(item.name)}
        className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
          isActive
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/20'
            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
        }`}
      >
        <Icon size={19} />
        <span>{item.name}</span>
      </button>
    )
  }

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#111827] px-4 py-6 text-white">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="rounded-xl bg-indigo-600 p-2">
          <Layers3 size={23} />
        </div>
        <span className="text-xl font-bold tracking-wide">
          DocSpace
        </span>
      </div>

      {/* Workspace */}
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Workspace
      </p>

      <nav className="space-y-2">
        {navigation.map(renderItem)}
      </nav>

      {/* Preferences */}
      <div className="mt-10">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Preferences
        </p>

        <div className="space-y-2">
          {preferences.map(renderItem)}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto border-t border-slate-700 pt-5">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition-colors hover:bg-slate-800 hover:text-red-400">
          <LogOut size={19} />
          Logout
        </button>
      </div>

    </aside>
  )
}

export default Sidebar
