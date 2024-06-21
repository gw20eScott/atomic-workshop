import { useState } from 'react'
import response from '@/workshop/_mockdata_/_session1_products'
import ProductModule from '@/workshop/session2/awnsers/core/module/task1.products'

const StoryWrapper = (props) => {
  const [activeProducts, setActiveProducts] = useState([])

  const handleClick = (productName) => {
    let newArray = [...activeProducts]

    if (newArray.indexOf(productName) >= 0) {
      newArray = newArray.filter((item) => item !== productName)
    } else {
      newArray.push(productName)
    }
    setActiveProducts(newArray)
  }

  return (
    <ProductModule
      handleClick={handleClick}
      activeProducts={activeProducts}
      {...props}
    />
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
