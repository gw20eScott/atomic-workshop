const prefixText = {
  sold: 'is sold',
  forSale: 'is for sale',
}

const MyComponent = ({ children, type }) => {
  return (
    <div>
      {children} {prefixText[type] || ''}
    </div>
  )
}

// AWNSER:
// - Because the business logic does not rely on the props
// - I move it outside of my component so it is only initalized once
const StoryWrapper = ({ text, type }) => {
  return <MyComponent type={type}> {text} </MyComponent>
}

export default {
  component: StoryWrapper,
  args: {
    text: 'Hello world',
    type: 'sold',
  },
}

export const BasicComponent = {}
