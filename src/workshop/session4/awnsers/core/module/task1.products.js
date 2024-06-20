import styled from 'styled-components'
import ProductCard from '@/workshop/session2/awnsers/core/composition/productCard'
import { PageTitle, P } from '@/workshop/session2/awnsers/core/elements/typo'

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

const ProductModule = ({ title, description, notForSale, data, activeProducts, handleClick }) => {
    return <ProductModuleWrapper>
        {
            activeProducts && activeProducts.length > 0 && <div className='productListSelected'>
                <strong> The following products are selected: </strong>
                {
                    activeProducts.map(item => <span key={item}> {item} </span>)
                }
            </div>
        }
        {title && <PageTitle>
            {title}
        </PageTitle>}
        {description && <P>
            {description}
        </P>}
        <div className='productList'>
            {
                data && data.map(item => <div key={item.productName}>
                    <ProductCard
                        active={activeProducts.indexOf(item.productName) > -1}
                        data={item}
                        notForSale={notForSale}
                        handleClick={() => { handleClick(item.productName) }}
                    />
                </div>)
            }
        </div>
        
    </ProductModuleWrapper>
}
export default ProductModule