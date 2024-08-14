import React from 'react'

export default function Table({data}) {
    const header = Object.keys(data[0]);
    return (
    <div className=''>
      <table className='table table-bordered rounded-4'>
        <thead>
          <tr>
            {header.map((val ,i) => (
              <th className='text-center' key={i}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {data.map((value, idx) => (
              <tr>
              {header.map((header) => (
                      <td className='text-center' key={idx}>{value[header]}</td>
              ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
