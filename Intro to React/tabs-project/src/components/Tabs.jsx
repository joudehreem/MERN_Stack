import { useState } from "react";
export default function Tabs({ tabsData }) {
  const [tabs, setTabs] = useState(tabsData[0]);

  function handleclick(index) {
    setTabs(tabsData[index]);
  }
  return (
    <div>
      <div>
        {tabsData.map((tab, i) => (
          <button key={i} onClick={() => handleclick(i)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        <h3>{tabs.content}</h3>
      </div>
    </div>
  );
}
