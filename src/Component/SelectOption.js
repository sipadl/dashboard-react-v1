import React from 'react'
import { FormSelect } from 'react-bootstrap'

export default function SelectOption({data, name, kelas}) {
  console.log(kelas)
  return (
      <FormSelect className={`form-control custom-select ${kelas}`} name={name}>
        {data.map((val, i) => (
          <option className={`isian p-1`} key={i} value={i}>{val}</option>
        ))}
      </FormSelect>
  )
}
