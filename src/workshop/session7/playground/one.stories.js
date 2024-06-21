const MyComponent = ({ text }) => {
  return <div>{text}</div>
}

// PROBLEM
//
// - This component simply renders a styled text
// - If this component updates, the value / reference of 'text' will be recomputed.
const StoryWrapper = ({ text }) => {
  return <MyComponent text={text} />
}

export default {
  component: StoryWrapper,
  args: {
    text: 'Hello world',
  },
}

export const BasicComponent = {}
