import React from 'react';

export const WhoComes = () => {
  const arr = ['unu', 'doi', 'trei'];
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
