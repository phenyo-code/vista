// app/page.tsx
"use client";

import { useState } from "react";
import AddressBar from "./components/AdressBar";
import TabBar from "./components/TabBar";
import BrowserWindow from "./components/BrowserWindow";
import Bookmarks from "./components/Bookmarks";
import { Tab, addTab, removeTab, updateTabUrl } from "./lib/browserState";

export default function Home() {
  const [tabs, setTabs] = useState<Tab[]>([{ id: "1", url: "https://example.com", title: "Example" }]);
  const [activeTabId, setActiveTabId] = useState<string>("1");
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  const handleAddTab = () => {
    const newTab = addTab();
    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(newTab.id);
  };

  const handleRemoveTab = (tabId: string) => {
    const updatedTabs = removeTab(tabs, tabId);
    setTabs(updatedTabs);
    if (activeTabId === tabId && updatedTabs.length > 0) {
      setActiveTabId(updatedTabs[0].id);
    }
  };

  const handleLoadUrl = (url: string) => {
    const updatedTabs = updateTabUrl(tabs, activeTabId, url);
    setTabs(updatedTabs);
  };

  const handleAddBookmark = (url: string) => {
    if (!bookmarks.includes(url)) {
      setBookmarks((prev) => [...prev, url]);
    }
  };

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen">
      <TabBar
        tabs={tabs}
        activeTabId={activeTabId}
        onSelectTab={setActiveTabId}
        onAddTab={handleAddTab}
        onRemoveTab={handleRemoveTab}
      />
      <AddressBar
        currentUrl={activeTab?.url || ""}
        onLoadUrl={handleLoadUrl}
        onAddBookmark={handleAddBookmark}
      />
      <BrowserWindow url={activeTab?.url || "about:blank"} />
      <Bookmarks bookmarks={bookmarks} onLoadUrl={handleLoadUrl} />
    </div>
  );
}