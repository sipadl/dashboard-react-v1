import React from 'react'

export default function InputGroup({ title, name, placeholder, value, onChange, onBlur, type = "text", disabled, readonly, textarea = false, isRequired = false }) {
  return (
    <div className="form-group row mt-3">
        <label for="input" className="label-for-col col-xs-12 col-md-12 h6">{title} {isRequired ? <span className="text-danger">*</span> : ''}</label>
        <div className="col-xs-12 col-md-12">
        {!textarea ? 
        <input
        type={type}
        name={name}
        id={name}
        className="form-control p-2"
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        value={value} // bind Formik's value
        onChange={onChange} // bind Formik's handleChange
        onBlur={onBlur} // bind Formik's handleBlur
        />
        :
        <textarea name={name} readonly={readonly} onChange={onChange} onBlur={onBlur} placeholder={placeholder} className="form-control p-2" rows="3" disabled={disabled}>{value}</textarea>
        }
        </div>
    </div>
  )
}
