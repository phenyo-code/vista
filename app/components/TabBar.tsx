// app/components/TabBar.tsx
"use client";

import { Tab } from "../lib/browserState";

type TabBarProps = {
  tabs: Tab[];
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  onAddTab: () => void;
  onRemoveTab: (tabId: string) => void;
};

export default function TabBar({ tabs, activeTabId, onSelectTab, onAddTab, onRemoveTab }: TabBarProps) {
  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-200 rounded mb-2">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center p-2 rounded cursor-pointer ${
            tab.id === activeTabId ? "bg-blue-500 text-white" : "bg-white text-gray-900"
          }`}
        >
          <span onClick={() => onSelectTab(tab.id)} className="mr-2">
            {tab.title}
          </span>
          <button
            onClick={() => onRemoveTab(tab.id)}
            className="text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      ))}
      <button
        onClick={onAddTab}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        + New Tab
      </button>
    </div>
  );
}