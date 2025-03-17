// app/components/AddressBar.tsx
"use client";

import { useState } from "react";

type AddressBarProps = {
  currentUrl: string;
  onLoadUrl: (url: string) => void;
  onAddBookmark: (url: string) => void;
};

export default function AddressBar({ currentUrl, onLoadUrl, onAddBookmark }: AddressBarProps) {
  const [url, setUrl] = useState(currentUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
    onLoadUrl(formattedUrl);
    setUrl(formattedUrl);
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-white shadow rounded mb-2">
      <form onSubmit={handleSubmit} className="flex-1 flex space-x-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL (e.g., https://example.com)"
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go
        </button>
      </form>
      <button
        onClick={() => onAddBookmark(currentUrl)}
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Bookmark
      </button>
    </div>
  );
}