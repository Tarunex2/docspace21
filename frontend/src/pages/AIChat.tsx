
import { useState } from 'react'
import {
  Bot,
  Send,
  User,
  Sparkles,
} from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function AIChat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am your DocSpace AI assistant. Ask me anything about your documents.',
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: input },
    ])

    setInput('')
  }

  return (
    <div className="flex h-full flex-col space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          AI Chat
        </h1>
        <p className="mt-2 text-gray-500">
          Chat with your documents using artificial intelligence.
        </p>
      </div>

      <div className="flex min-h-[500px] flex-1 flex-col overflow-hidden rounded-xl border bg-white">

        <div className="flex items-center gap-3 border-b p-5">
          <div className="rounded-lg bg-indigo-100 p-2">
            <Sparkles className="text-indigo-600" size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              DocSpace Assistant
            </h2>
            <p className="text-xs text-green-600">
              AI Assistant
            </p>
          </div>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="h-fit rounded-lg bg-indigo-100 p-2">
                  <Bot size={19} className="text-indigo-600" />
                </div>
              )}

              <div
                className={`max-w-[75%] rounded-xl px-4 py-3 text-sm ${
                  message.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>

              {message.role === 'user' && (
                <div className="h-fit rounded-lg bg-gray-100 p-2">
                  <User size={19} className="text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex items-center gap-3 rounded-xl border p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend()
              }}
              placeholder="Ask something about your documents..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />

            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="rounded-lg bg-indigo-600 p-3 text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AIChat
