import React from 'react'

export default function Input({data, placeholder, kelas, tipe, readonly}) {
  return (
    <div>
    <input type={tipe ? tipe : 'text'} name={data} placeholder={placeholder} readonly={readonly} className={`form-control ${kelas}`} />
    </div>
  )
}
