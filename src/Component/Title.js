import React from 'react'

export default function Title({data, kelas}) {

return (
    <div className={`main-title ${kelas}`}>{data}</div>
  )
}
