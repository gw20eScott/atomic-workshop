const MyComponent = ({ children, type }) => {
  const prefixText = {
    sold: 'is sold',
    forSale: 'is for sale'
  }

  return <div>
      {children} {prefixText[type] || ''}
  </div>
}

// PROBLEM:
// - I have bussiness logic in my component that 
// - will be reinitalized during every re-render.
const StoryWrapper = ({ text, type }) => {
  return <MyComponent type={type}> {text} </MyComponent>
}

export default {
  component: StoryWrapper,
  args: {
    text: 'Hello world',
    type: 'sold'
  }
}

export const BasicComponent = {};