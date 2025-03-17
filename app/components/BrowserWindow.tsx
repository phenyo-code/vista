// app/components/BrowserWindow.tsx
"use client";

type BrowserWindowProps = {
  url: string;
};

export default function BrowserWindow({ url }: BrowserWindowProps) {
  return (
    <div className="flex-1 bg-white rounded shadow overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full border-none"
        title="Browser Window"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}