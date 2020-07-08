import React from 'react';

export const WhoComes = () => {
  const arr = ['Leosha', 'Katea', 'Dima'];
  return (
    <div>
      {
        arr.map(el => (
          <div>
            {el}
          </div>
        ))
      }
    </div>
  );
};
