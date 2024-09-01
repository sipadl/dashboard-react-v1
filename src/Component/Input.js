import React from 'react'

export default function Input({data, placeholder, kelas, tipe}) {
  return (
    <div>
    <input type={tipe ? tipe : 'text'} name={data} placeholder={placeholder} className={`form-control ${kelas}`} />
    </div>
  )
}
