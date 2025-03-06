// Move this to a separate client component file (e.g., VersionSelector.tsx)
"use client";

import { ChevronRight } from "lucide-react";

export const VersionSelector = ({
  files,
  selectedFile,
  onSelect,
}: {
  files: Array<{ sha: string; name: string }>;
  selectedFile: { sha: string; name: string } | null;
  onSelect: (file: { sha: string; name: string }) => void;
}) => (
  <div className="col-span-1 border-r">
    <h2 className="text-lg font-semibold mb-4">Versions</h2>
    {files.map((file) => (
      <button
        key={file.sha}
        onClick={() => onSelect(file)}
        className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 ${
          selectedFile?.sha === file.sha ? "bg-gray-100 dark:bg-gray-800" : ""
        }`}
      >
        <ChevronRight className="h-4 w-4" />
        {file.name.replace(".md", "")}
      </button>
    ))}
  </div>
);
