
import { FileText, Search, Download, Trash2 } from "lucide-react";

const documents = [
  {
    name: "Project Report.pdf",
    type: "PDF",
    size: "2.4 MB",
    date: "Nov 25, 2026",
  },
  {
    name: "Meeting Notes.docx",
    type: "DOCX",
    size: "1.2 MB",
    date: "Nov 24, 2026",
  },
  {
    name: "Research Paper.pdf",
    type: "PDF",
    size: "3.5 MB",
    date: "Nov 22, 2026",
  },
];

export default function Documents() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          My Documents
        </h1>
        <p className="mt-2 text-gray-500">
          Manage and organize all your documents in one place.
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full outline-none"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="p-4">Document</th>
              <th className="p-4">Type</th>
              <th className="p-4">Size</th>
              <th className="p-4">Uploaded</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.name} className="border-b last:border-0">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-600" size={20} />
                    <span className="font-medium text-gray-800">
                      {doc.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-gray-600">{doc.type}</td>
                <td className="p-4 text-gray-600">{doc.size}</td>
                <td className="p-4 text-gray-600">{doc.date}</td>
                <td className="p-4">
                  <div className="flex gap-3">
                    <button className="text-blue-600">
                      <Download size={18} />
                    </button>
                    <button className="text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
