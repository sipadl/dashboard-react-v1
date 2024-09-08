import React from 'react'

export default function InputGroup({title, name, value, readonly, disabled, placeholder, textarea ,tipe}) {
  return (
    <div className="form-group row mt-3">
        <label for="input" className="label-for-col col-12 h6">{title}</label>
        <div className="col-12">
        {!textarea ? 
        <input
        type={tipe ? tipe : "text"}
        name={name}
        disabled={disabled}
        id="input"
        className="form-control p-2"
        placeholder={placeholder}
        readonly={readonly}
        value={value}/>
        :
        <textarea name={name} readonly={readonly} placeholder={placeholder} className="form-control p-2" rows="3" disabled={disabled}>{value}</textarea>
        }
        </div>
    </div>
  )
}
