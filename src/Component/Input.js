import React from 'react'

export default function Input({data, placeholder, kelas}) {
  return (
    <input type='text' name={data} placeholder={placeholder} className={`form-control ${kelas}`} />
  )
}
