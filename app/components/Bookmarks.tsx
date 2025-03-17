// app/components/Bookmarks.tsx
"use client";

type BookmarksProps = {
  bookmarks: string[];
  onLoadUrl: (url: string) => void;
};

export default function Bookmarks({ bookmarks, onLoadUrl }: BookmarksProps) {
  return (
    <div className="p-2 bg-white shadow rounded mt-2">
      <h3 className="text-lg font-semibold mb-2">Bookmarks</h3>
      {bookmarks.length === 0 ? (
        <p className="text-gray-500">No bookmarks yet.</p>
      ) : (
        <ul className="space-y-1">
          {bookmarks.map((url, index) => (
            <li key={index}>
              <button
                onClick={() => onLoadUrl(url)}
                className="text-blue-500 hover:underline"
              >
                {url}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}