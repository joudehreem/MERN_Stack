import React from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const tabsData = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here' },
  ];

  return (
    <div className="App">
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default App;
