import Card from '@/workshop/session2/awnsers/core/composition/card'

const ProductCard = ({ data, handleClick, active, notForSale }) => {
    return <Card>
    <Card.Media {...data.media} width={300} />
    <Card.Title title={data.productName} id={data.id} />
    <Card.Description description={`${data.brand} | ${data.price}`} />
    {!notForSale && <Card.Button handleClick={handleClick} text={`${active ? 'Remove From' : 'Add To'} Cart`} />}
  </Card>
}
export default ProductCard