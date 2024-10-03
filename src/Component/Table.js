import React from 'react';
import ActiveBadge from './ActiveBadge';

export default function Table({ data, th }) {
  console.log(data)
  return (
    <div className='table-responsive'>
      <table className='table table-custom'>
        <thead>
          <tr>
            {th.map((val, i) => (
              <th key={i}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
             {data}
        </tbody>
        <tfoot>
          
        </tfoot>
      </table>
    </div>
  );
}
