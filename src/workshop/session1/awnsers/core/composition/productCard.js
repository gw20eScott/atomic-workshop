import Card from '@/workshop/session1/awnsers/core/composition/card'

const ProductCard = ({ data, handleClick, active }) => {
  return (
    <Card>
      <Card.Media {...data.media} width={300} />
      <Card.Title title={data.productName} />
      <Card.Description description={`${data.brand} | ${data.price}`} />
      <Card.Button
        handleClick={handleClick}
        text={`${active ? 'Remove From' : 'Add To'} Cart`}
      />
    </Card>
  )
}
export default ProductCard
