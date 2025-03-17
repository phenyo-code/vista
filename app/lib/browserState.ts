// lib/browserState.ts
export type Tab = {
    id: string;
    url: string;
    title: string;
    history?: string[];
    historyIndex?: number;
  };
  
  export function addTab(): Tab {
    return {
      id: Date.now().toString(),
      url: "about:blank",
      title: "New Tab",
      history: ["about:blank"],
      historyIndex: 0,
    };
  }
  
  export function removeTab(tabs: Tab[], tabId: string): Tab[] {
    return tabs.filter((tab) => tab.id !== tabId);
  }
  
  export function updateTabUrl(tabs: Tab[], tabId: string, url: string): Tab[] {
    return tabs.map((tab) => {
      if (tab.id === tabId) {
        const newHistory = [...(tab.history || []), url];
        return {
          ...tab,
          url,
          title: url.split("/")[2] || "New Tab", // Simple title from domain
          history: newHistory,
          historyIndex: newHistory.length - 1,
        };
      }
      return tab;
    });
  }