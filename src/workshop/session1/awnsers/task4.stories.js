import response from '@/workshop/_mockdata_/_session1_products'
import ProductModule from '@/workshop/session1/awnsers/core/module/products'

const StoryWrapper = ({ data }) => {
  return <ProductModule data={data} />
}

export default {
  component: StoryWrapper,
  args: {
    data: response.data,
  },
}

export const ProductsModuleStory = {}
