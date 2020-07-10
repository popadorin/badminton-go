import React from 'react';
import {Player} from '../../models';

export function WhoComes() {
  return (
    <div>
      {
        dummyWhoComes.map((el, index) => (
          <div key={index}>
            {el.name}
          </div>
        ))
      }
    </div>
  );
}

const dummyWhoComes: Player[] = [
  {name: 'Leosha'},
  {name: 'Katea'},
  {name: 'Dima'}
];
