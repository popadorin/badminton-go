import React, {useState} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import {AppContent} from '../components';
import {TabItemTitle} from '../config';
import {getEnumValues} from '../utils';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <AppContent index={activeIndex}/>
      <TabBar
        activeIndex={activeIndex}
        handleActiveIndexUpdate={n => setActiveIndex(n)}
      >
        {
          getEnumValues(TabItemTitle).map((tabItemTitle: string) => (
            <Tab key={tabItemTitle}>
              <span className='mdc-tab__text-label'>{tabItemTitle}</span>
            </Tab>
          ))
        }
      </TabBar>
    </div>
  );
}

export default App;
