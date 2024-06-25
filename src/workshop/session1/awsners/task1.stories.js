import { PageTitle } from '@/workshop/session1/awsners/core/elements/typo'

const StoryWrapper = ({ data }) => {
  return <PageTitle> {data} </PageTitle>
}

export default {
  component: StoryWrapper,
  args: {
    data: 'This is a page title',
  },
}

export const PageTitleStory = {}
