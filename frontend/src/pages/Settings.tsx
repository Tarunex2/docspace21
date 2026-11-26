
import { useState } from 'react'
import { Bell, Shield, Palette, Save } from 'lucide-react'

function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Settings
        </h1>
        <p className="mt-2 text-gray-500">
          Manage your application preferences.
        </p>
      </div>

      <div className="space-y-5">

        {/* Notifications */}
        <div className="rounded-xl border bg-white p-6">
          <div className="mb-6 flex items-center gap-3">
            <Bell className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800">
              Notifications
            </h2>
          </div>

          <div className="space-y-5">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">
                  Push Notifications
                </p>
                <p className="text-sm text-gray-400">
                  Receive application notifications.
                </p>
              </div>

              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="h-5 w-5 accent-indigo-600"
              />
            </label>

            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">
                  Email Updates
                </p>
                <p className="text-sm text-gray-400">
                  Receive updates through email.
                </p>
              </div>

              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
                className="h-5 w-5 accent-indigo-600"
              />
            </label>
          </div>
        </div>

        {/* Appearance */}
        <div className="rounded-xl border bg-white p-6">
          <div className="mb-6 flex items-center gap-3">
            <Palette className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800">
              Appearance
            </h2>
          </div>

          <label className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-700">
                Dark Mode
              </p>
              <p className="text-sm text-gray-400">
                Enable dark appearance.
              </p>
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="h-5 w-5 accent-indigo-600"
            />
          </label>
        </div>

        {/* Security */}
        <div className="rounded-xl border bg-white p-6">
          <div className="flex items-center gap-3">
            <Shield className="text-indigo-600" />
            <h2 className="font-semibold text-gray-800">
              Security
            </h2>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Your account security settings will be available here.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700">
          <Save size={18} />
          Save Preferences
        </button>

      </div>
    </div>
  )
}

export default Settings
