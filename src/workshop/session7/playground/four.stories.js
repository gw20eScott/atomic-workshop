import { useState, useEffect } from 'react'

const MyComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (firstName.length && lastName.length) {
      if (firstName.length > 3 && lastName.length > 3) {
        setError(false)
      } else {
        setError(true)
      }
    } else {
      setError(false)
    }
  }, [firstName, lastName, error, setError])

  return (
    <div>
      <input
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      {error && 'first name and last name both need to be 3 characters or more'}
    </div>
  )
}

// PROBLEM:
// - We're doing a simple form with form validation
// - Although nothing is technically wrong
// - There are ways we can improve this code to make easier to maintain
//
// - Think about state management
// - Think about UI generation
// - Think about validation vleanup
const StoryWrapper = ({ data }) => {
  return <MyComponent data={data} />
}

export default {
  component: StoryWrapper,
  args: {},
}

export const BasicComponent = {}
