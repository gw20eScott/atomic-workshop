import response from '@/workshop/_mockdata_/_session1_products'
import ProductCard from '@/workshop/session1/awnsers/core/composition/productCard'

const StoryWrapper = (data) => {
  const handleClick = () => {}
  return <ProductCard data={data} handleClick={handleClick} />
}

export default {
  component: StoryWrapper,
  args: { ...response.data[0] },
}

export const ProductCardStory = {}
