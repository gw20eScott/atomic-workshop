import { useState } from 'react'
import styled from 'styled-components'
import ProductCard from '@/workshop/session1/awnsers/core/composition/productCard'
import { PageTitle, P } from '@/workshop/session1/awnsers/core/elements/typo'

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
        setActiveProducts(productName)
    }

    return <ProductModuleWrapper>
        {
            activeProducts && activeProducts.length > 0 && <div className='productListSelected'>
                <strong> The following products are selected: </strong>
                {
                    activeProducts.map(item => <span> {item} </span>)
                }
            </div>
        }
        <PageTitle>
            Product List
        </PageTitle>
        <P>
            The following products are now on sale
        </P>
        <div className='productList'>
            {
                data && data.map(item => <div key={item.productName}>
                    <ProductCard
                        data={item}
                        handleClick={() => { handleClick(item.productName) }}
                    />
                </div>)
            }
        </div>
        
    </ProductModuleWrapper>
}
export default ProductModule