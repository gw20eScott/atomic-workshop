import { useState, useMemo, useCallback } from 'react'

const LENGTH_CHECK = 3
const shouldShowError = (state) => {
  return state?.firstName && state?.lastName
    ? !(state?.firstName?.length >= LENGTH_CHECK && 
      state?.lastName?.length >= LENGTH_CHECK)
    : false
}

const MyComponent = () => {
  // Combined state
  const [ state, setState ] = useState({})

  // Have a runtime check as and when state updates
  const error = useMemo(() => {
    return shouldShowError(state)
  }, [state])

  // Centeral update state area
  const handleChange = useCallback((key, value) => {
    setState((oldState) => ({
      ...oldState,
      [key]: value
    }))
  }, [setState])

  // Dynamically build the fields, so it's easier to extend and manage
  const fields = useMemo(() => {
    return [
      {
        key: 'firstName',
        placeholder: 'Set your first name',
        onChange: (e) => {handleChange('firstName', e.target.value)}
      },
      {
        key: 'lastName',
        placeholder: 'Set your last name',
        onChange: (e) => {handleChange('lastName', e.target.value)}
      }
    ]
  }, [handleChange])

  // Render the fields and output
  return <div>
      {
        fields && fields.map(({ key, onChange, placeholder }) => {
          return <div key={key}>
            <input value={state[key] || ''} placeholder={placeholder} onChange={onChange} />
          </div>
        })
      }

      {error && 'first name and last name both need to be 3 characters or more'}
  </div>
}

// POTENTIAL AWNSER
//
// - This level of optimisation is overkill regardless, 
// - but very subjective and there's multiple ways to approach it.
//
// - No need to useEffect, you can intead memo the check
// - Single state object
// - Field changes can be done in the data and don't affect the DOM / Visual components
const StoryWrapper = ({ data }) => {
  return <MyComponent data={data} />
}

export default {
  component: StoryWrapper,
  args: {}
}

export const BasicComponent = {};