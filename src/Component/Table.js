import React from 'react';
import ActiveBadge from './ActiveBadge';

export default function Table({ data }) {
  const header = Object.keys(data[0]);
  return (
    <div className='table-responsive'>
      <table className='table table-custom'>
        <thead>
          <tr>
            {header.map((val, i) => (
              <th key={i}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((value, idx) => (
            <tr key={idx}>
              {header.map((header) => (
                header === 'images' || header === 'logo' ? (
                  <td key={header}><img src={value[header]} alt='...' /></td>
                ) : header === 'status' ? (
                  <td key={header}><ActiveBadge /></td>
                ) : (
                  <td key={header}>{value[header]}</td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
