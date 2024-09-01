import React from 'react'

export default function Placeholder({name, kelas}) {
  return (
    <label className={`label-form input ${kelas}`}>{name}</label>
  )
}
