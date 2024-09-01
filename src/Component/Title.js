import React from 'react'

export default function Title({data, kelas}) {

return (
    <div className={`h2 ${kelas}`}>{data}</div>
  )
}
