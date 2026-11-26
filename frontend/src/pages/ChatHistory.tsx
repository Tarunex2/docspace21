
import { MessageSquare, Search, Clock } from 'lucide-react'

const conversations = [
  {
    title: 'Understanding Project Report',
    date: 'Nov 26, 2026',
    messages: 12,
  },
  {
    title: 'Research Paper Summary',
    date: 'Nov 25, 2026',
    messages: 8,
  },
  {
    title: 'Meeting Notes Analysis',
    date: 'Nov 24, 2026',
    messages: 15,
  },
]

function ChatHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Chat History
        </h1>
        <p className="mt-2 text-gray-500">
          View your previous conversations with DocSpace AI.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full outline-none"
        />
      </div>

      <div className="space-y-4">
        {conversations.map((chat) => (
          <div
            key={chat.title}
            className="flex items-center justify-between rounded-xl border bg-white p-5"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-indigo-100 p-3">
                <MessageSquare className="text-indigo-600" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {chat.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {chat.messages} messages
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={16} />
              {chat.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatHistory
