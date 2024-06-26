import { useState } from 'react'
import styled from 'styled-components'
import ProductCard from '@/workshop/session1/awsners/core/composition/productCard'

const ProductModuleWrapper = styled.div`
  > h1 {
    margin-bottom: 6px;
  }

  > p {
    padding-bottom: 12px;
  }
  .productList {
    white-space: nowrap;

    > div {
      display: inline-block;
      vertical-align: top;
    }
  }

  .productListSelected {
    margin-bottom: 20px;
  }
`

const ProductModule = ({ data }) => {
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
    <ProductModuleWrapper>
      {activeProducts && activeProducts.length > 0 && (
        <div className="productListSelected">
          <strong> The following products are selected: </strong>
          {activeProducts.map((item) => (
            <span key={item}> {item} </span>
          ))}
        </div>
      )}

      <div className="productList">
        {data &&
          data.map((item) => (
            <div key={item.productName}>
              <ProductCard
                active={activeProducts.indexOf(item.productName) > -1}
                data={item}
                handleClick={() => {
                  handleClick(item.productName)
                }}
              />
            </div>
          ))}
      </div>
    </ProductModuleWrapper>
  )
}
export default ProductModule
