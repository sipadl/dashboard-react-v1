import React from 'react'
import { FormSelect } from 'react-bootstrap'

export default function SelectOption({data, name, kelas}) {
  return (
      <FormSelect className={`form-control ${kelas}`} name={name}>
        {data.map((val, i) => (
          <option key={i} value={i}>{val}</option>
        ))}
      </FormSelect>
  )
}
