import { useState } from 'react'

const validationIndex = {
  length: (value, validation) => {
    return value.length >= validation
  },
  minLength: (value, validation) => {
    return value.length >= validation
  },
  maxLength: (value, validation) => {
    return value.length <= validation
  }
}

const TextComponent = ({ name, dataKey, data, validation, handleChange }) => {
  const [error, setError] = useState(false)

  const passValidation = (value) => {
    let errors = []
    let minLength = validation.minLength ? validationIndex.minLength(value, validation.minLength) : true
    let maxLength = validation.maxLength ? validationIndex.maxLength(value, validation.maxLength) : true
    let length = validation.length ? validationIndex.length(value, validation.length) : true

    // report back
    if (!length) {
      errors.push({
        type: 'length'
      })
    }

    if (!maxLength) {
      errors.push({
        type: 'maxLength'
      })
    }

    if (!minLength) {
      errors.push({
        type: 'minLength'
      })
    }

    if(!errors.length) {
      setError(false)
      handleChange(dataKey, value)
    } else {
      setError(true)
    }
  }

  return (
    <div className="fieldEntry">
      <label htmlFor={dataKey}>{name}</label>
      <input
        value={data[dataKey]}
        id={dataKey}
        name={dataKey}
        onChange={(e) => {
          console.log(e.target.value)
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
      <label htmlFor={dataKey}>{name}</label>
      <textarea
        value={data[dataKey]}
        id={dataKey}
        name={dataKey}
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
      <label htmlFor={dataKey}>{name}</label>
      <select
        value={data[dataKey]}
        name={dataKey}
        id={dataKey}
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
    console.log('key', key, value)
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
