import React, {ReactElement} from 'react';
import {Home} from '../Home';
import {WhoComes} from '../WhoComes';

interface Props {
  index: number
}

function getIndexToTab(index: number): ReactElement {
  return IndexToTabConfig[index];
}

export const TabContent = ({index}: Props) => {
  return (
    <div style={{
      height: '100vh',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {getIndexToTab(index)}
    </div>
  );
};

const IndexToTabConfig = [<Home/>, <WhoComes/>];
