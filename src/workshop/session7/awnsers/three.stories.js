import { useMemo } from 'react'

const MyComponent = ({ data }) => {
  const makeDataDoSomething = useMemo(() => {
    return data.map((item, indx) => {
      return {
        id: indx,
        name: `Item ${indx}`,
        price: `$ ${300 * (indx + 1)}`
      }
    })
  }, [data])

  return <div>
      {
        makeDataDoSomething && makeDataDoSomething.map(item => {
          return <div key={item.id}>
            {item.id} - {item.name} - {item.price}
          </div>
        })
      }
  </div>
}

// AWNSER:
// - We useMemo to cache the data until the dependency changes
// - We also used key={} to optimise the use of the dom elements
const StoryWrapper = ({ data }) => {
  return <MyComponent data={data} />
}

// Data for the exercise
const item = {
  id: null,
  name: null,
  price: null
}

export default {
  component: StoryWrapper,
  args: {
    data: [item, item, item, item, item, item, item, item]
  }
}

export const BasicComponent = {};