
import { UserRound, Mail, Calendar, Edit2 } from 'lucide-react'

function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          My Profile
        </h1>
        <p className="mt-2 text-gray-500">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
            <UserRound size={45} className="text-indigo-600" />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-900">
              John Doe
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              DocSpace Member
            </p>
          </div>

          <button className="ml-auto flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
            <Edit2 size={16} />
            Edit Profile
          </button>
        </div>

        <div className="mt-10 border-t pt-8">
          <h3 className="mb-6 font-semibold text-gray-800">
            Personal Information
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-400">Full Name</p>
              <div className="mt-2 flex items-center gap-2 text-gray-800">
                <UserRound size={18} />
                John Doe
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email Address</p>
              <div className="mt-2 flex items-center gap-2 text-gray-800">
                <Mail size={18} />
                john@example.com
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400">Member Since</p>
              <div className="mt-2 flex items-center gap-2 text-gray-800">
                <Calendar size={18} />
                November 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
