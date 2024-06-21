import { useState } from 'react'
import styled from 'styled-components'
import ProductCard from '@/workshop/session2/awnsers/core/composition/task3.productCard'
import { PageTitle, P } from '@/workshop/session2/awnsers/core/elements/typo'

const ProductModuleWrapper = styled.div`
  > h1 {
    margin-bottom: 6px;
  }

  > p {
    padding-bottom: 12px;
  }

  ${(props) =>
    props.variant === 'grid'
      ? `

        .productList {
            > div {
                display: inline-block;
                vertical-align: top;
            } 
        }
           
    `
      : ``}

  .toggleView {
    padding: 22px 0;

    div {
      display: inline-block;
      padding-right: 15px;
      cursor: pointer;
      font-weight: bold;
    }
  }
`

const ProductModule = ({
  title,
  showToggles = false,
  description,
  activeProducts,
  data,
  notForSale,
  handleClick,
}) => {
  const [variant, setVariant] = useState('grid')

  return (
    <ProductModuleWrapper variant={variant}>
      {title && <PageTitle>{title}</PageTitle>}
      {description && <P>{description}</P>}

      {showToggles && (
        <div className="toggleView">
          <div onClick={() => setVariant('grid')}>Grid</div>
          <div onClick={() => setVariant('list')}>List</div>
        </div>
      )}

      <div className="productList">
        {data &&
          data.map((item) => (
            <ProductCard
              variant={variant}
              key={item.productName}
              active={activeProducts.indexOf(item.productName) > -1}
              data={item}
              notForSale={notForSale}
              handleClick={() => {
                handleClick(item.productName)
              }}
            />
          ))}
      </div>
    </ProductModuleWrapper>
  )
}
export default ProductModule
