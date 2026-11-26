
import { useState } from 'react'
import { UploadCloud, FileText, X } from 'lucide-react'

function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Upload Documents
        </h1>
        <p className="mt-2 text-gray-500">
          Upload your documents to DocSpace and chat with them using AI.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
        <UploadCloud size={48} className="mx-auto text-blue-600" />

        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          Upload your documents
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Select a PDF, DOCX or TXT file from your computer.
        </p>

        <label className="mt-6 inline-block cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Choose File
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {selectedFile && (
        <div className="flex items-center justify-between rounded-xl border bg-white p-4">
          <div className="flex items-center gap-3">
            <FileText className="text-blue-600" size={24} />

            <div>
              <p className="font-medium text-gray-800">
                {selectedFile.name}
              </p>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedFile(null)}
            className="text-red-500"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <button
        disabled={!selectedFile}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        Upload Document
      </button>
    </div>
  )
}

export default Upload
