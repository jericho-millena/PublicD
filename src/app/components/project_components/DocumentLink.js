import React from "react";

export default function Component() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Document Link</h2>
        <a 
          href="https://www.figma.com/file/..." 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <a className="h-4 w-4 mr-2" />
          <span className="text-sm">https://www.figma.com/file/...</span>
        </a>
      </div>
      
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">Topics</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
            Industry, Innovation, & Infrastructure
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
            Algorithms
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
            Design
          </span>
        </div>
      </div>
    </div>
  )
}