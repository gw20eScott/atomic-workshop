const MyComponent = ({ children }) => {
    return <div>
        {children}
    </div>
}

// AWNSER:
// - I Make the component a wrapping component, because childrens value
// - remains cached and computed if the component rerenders.
const StoryWrapper = ({ text }) => {
  return <MyComponent> {text} </MyComponent>
}

export default {
  component: StoryWrapper,
  args: {
    text: 'Hello world'
  }
}

export const BasicComponent = {};