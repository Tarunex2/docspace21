
import {
  FileText,
  Files,
  HardDrive,
  MessageSquare,
  Upload,
  ArrowRight,
  File,
} from "lucide-react";

const stats = [
  {
    title: "Total Documents",
    value: "128",
    icon: Files,
    description: "Documents uploaded",
  },
  {
    title: "Storage Used",
    value: "2.4 GB",
    icon: HardDrive,
    description: "Of 10 GB available",
  },
  {
    title: "Recent Uploads",
    value: "12",
    icon: Upload,
    description: "This month",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome to DocSpace 👋
        </h1>
        <p className="mt-2 text-gray-500">
          Manage your documents and get answers with AI.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{stat.title}</p>
                <Icon size={22} className="text-blue-600" />
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                {stat.value}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* AI Assistant */}
      <div className="rounded-xl bg-blue-600 p-8 text-white">
        <div className="flex items-center gap-3">
          <MessageSquare size={28} />
          <h2 className="text-xl font-semibold">
            Chat with your Documents
          </h2>
        </div>

        <p className="mt-3 max-w-xl text-blue-100">
          Ask questions about your uploaded documents and get
          intelligent answers powered by AI.
        </p>

        <button className="mt-6 flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-blue-600 hover:bg-blue-50">
          Start AI Chat
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Recent Documents */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Documents
          </h2>

          <button className="text-sm font-medium text-blue-600">
            View All
          </button>
        </div>

        <div className="space-y-5">
          {["Project Report.pdf", "Meeting Notes.docx", "Research Paper.pdf"].map(
            (document) => (
              <div
                key={document}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <FileText className="text-blue-600" size={20} />
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">
                      {document}
                    </p>
                    <p className="text-xs text-gray-400">
                      Recently uploaded
                    </p>
                  </div>
                </div>

                <File size={18} className="text-gray-400" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
