const MyComponent = ({ data }) => {
  const makeDataDoSomething = data.map((item, indx) => {
    return {
      id: indx,
      name: `Item ${indx}`,
      price: `$ ${300 * (indx + 1)}`,
    }
  })

  return (
    <div>
      {makeDataDoSomething &&
        makeDataDoSomething.map((item) => {
          return (
            <div>
              {item.id} - {item.name} - {item.price}
            </div>
          )
        })}
    </div>
  )
}

// PROBLEM:
// - We need to do some runtime changes to the data
// - Be it filtering, sorting, combining, migrating etc
//
// - This means if the component rerenders for any reason, these
// - runtime checks will execute everytime.
//
// - There's another error in this example code as well
// - maybe your linters will spot it.
const StoryWrapper = ({ data }) => {
  return <MyComponent data={data} />
}

// Data for the exercise
const item = {
  id: null,
  name: null,
  price: null,
}

export default {
  component: StoryWrapper,
  args: {
    data: [item, item, item, item, item, item, item, item],
  },
}

export const BasicComponent = {}
