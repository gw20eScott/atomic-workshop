import { useState } from 'react'

const validationIndex = {
  length: (value, validation) => {
    return value.length >= validation.length
  },
}

const TextComponent = ({ name, dataKey, data, validation, handleChange }) => {
  const [error, setError] = useState(false)

  const passValidation = (value) => {
    if (validation.length) {
      const validLength = validationIndex.length(value, validation)
      if (validLength) {
        setError(false)
        handleChange(dataKey, value)
      } else {
        setError('Not long enough')
      }
    } else {
      setError(false)
      handleChange(value)
    }
  }

  return (
    <div className="fieldEntry">
      <label>{name}</label>
      <input
        value={data[dataKey]}
        onChange={(e) => {
          passValidation(e.target.value)
        }}
      />
      {error !== false && <div className="errorText">{error}</div>}
    </div>
  )
}

const TextAreaComponent = ({
  name,
  dataKey,
  data,
  validation,
  handleChange,
}) => {
  const [error, setError] = useState(false)

  const passValidation = (value) => {
    if (validation.length) {
      const validLength = validationIndex.length(value, validation)
      if (validLength) {
        setError(false)
        handleChange(dataKey, value)
      } else {
        setError('Not long enough')
      }
    } else {
      setError(false)
      handleChange(value)
    }
  }

  return (
    <div className="fieldEntry">
      <label>{name}</label>
      <textarea
        value={data[dataKey]}
        onChange={(e) => {
          passValidation(e.target.value)
        }}
      />
      {error !== false && <div className="errorText">{error}</div>}
    </div>
  )
}

const SelectComponent = ({ name, options, data, dataKey, handleChange }) => {
  return (
    <div className="fieldEntry">
      <label>{name}</label>
      <select
        value={data[dataKey]}
        name={name}
        id={name}
        onChange={(e) => {
          handleChange(dataKey, e.target.value)
        }}
      >
        {options.map(({ name, value }) => (
          <option key={name} value={value}>
            {' '}
            {value}{' '}
          </option>
        ))}
      </select>
    </div>
  )
}

const typeIndex = {
  Text: TextComponent,
  Textarea: TextAreaComponent,
  Select: SelectComponent,
}

const FormManager = ({ schema, data, updateState }) => {
  const handleChange = (key, value) => {
    updateState(key, value)
  }

  return (
    <div>
      {schema.map((item) => {
        const Entity = typeIndex[item.type]

        return (
          <Entity
            key={item.name}
            {...item}
            data={data}
            handleChange={handleChange}
          />
        )
      })}
    </div>
  )
}
export default FormManager
