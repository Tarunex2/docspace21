
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Documents from '../pages/Documents'
import Upload from '../pages/Upload'
import AIChat from '../pages/AIChat'
import ChatHistory from '../pages/ChatHistory'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const [activePage, setActivePage] = useState('Dashboard')

  const renderPage = () => {
  switch (activePage) {
    case 'Dashboard':
      return <Dashboard />

    case 'My Documents':
      return <Documents />

    case 'Upload Documents':
      return <Upload />

    case 'AI Chat':
     return <AIChat />

     case 'Chat History':
  return <ChatHistory />

  case 'My Profile':
  return <Profile />

  case 'Settings':
  return <Settings />

    default:
      return children
  }
}

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F9FC]">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">
          {renderPage()}
        </main>
      </div>

    </div>
  )
}

export default MainLayout
