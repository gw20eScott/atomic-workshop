import response from '@/workshop/_mockdata_/_session1_products'
import ProductModule from '@/workshop/session2/awsners/core/module/task2.products'
import CartModule from '@/workshop/session2/awsners/core/module/task2.cart'
import ProductsProvider, {
  useProductContext,
} from '@/workshop/session2/awsners/core/context/products'

const ProductsWrapper = (props) => {
  const { activeProducts, setSelectedProducts } = useProductContext()
  return (
    <div>
      <CartModule activeProducts={activeProducts} />
      <ProductModule
        handleClick={setSelectedProducts}
        activeProducts={activeProducts}
        {...props}
      />
    </div>
  )
}

const StoryWrapper = (props) => {
  return (
    <ProductsProvider>
      <ProductsWrapper {...props} />
    </ProductsProvider>
  )
}

export default {
  component: StoryWrapper,
  args: {
    data: response.data,
  },
}

export const ProductsModuleStory = {
  args: {
    title: 'Products',
    data: response.data,
    description: 'The following products are at a discount.',
  },
}

export const ComingSoonProductsModuleStory = {
  args: {
    title: 'Coming Soon',
    data: response.data,
    notForSale: true,
    description: 'The following products are soon on sale.',
  },
}
