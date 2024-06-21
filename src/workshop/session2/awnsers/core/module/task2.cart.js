import styled from 'styled-components'

const Cart = styled.div`
  .productListSelected {
    margin-bottom: 20px;
  }
`

const CartModule = ({ activeProducts }) => {
  return (
    <Cart>
      {activeProducts && activeProducts.length > 0 && (
        <div className="productListSelected">
          <strong> The following products are selected: </strong>
          {activeProducts.map((item) => (
            <span key={item}> {item} </span>
          ))}
        </div>
      )}
    </Cart>
  )
}
export default CartModule
