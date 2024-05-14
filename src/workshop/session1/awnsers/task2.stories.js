import ImageElement from '@/workshop/session1/awnsers/core/elements/image'

import media from '@/workshop/_mockdata_/media/orange.png'

const StoryWrapper = (data) => {
  return <ImageElement {...data} />
}

export default {
  component: StoryWrapper,
  args: {
    src: media,
    alt: 'Orange Iphone',
    width: 200,
    variant: 'onlyImage'
  }
}

export const ImageElementStory = {};