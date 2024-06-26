import response from '@/workshop/_mockdata_/_session1_products'
import ProductModule from '@/workshop/session1/awsners/core/sections/product'

const StoryWrapper = (props) => {
  return <ProductModule {...props} />
}

export default {
  component: StoryWrapper,
  args: {
    data: response.data,
    title: 'Apple Iphones',
    desc: 'Great selection of phones to choose from.',
    link: {
      href: '#',
      text: 'View more products'
    }
  },
}

export const ProductsModuleStory = {}
