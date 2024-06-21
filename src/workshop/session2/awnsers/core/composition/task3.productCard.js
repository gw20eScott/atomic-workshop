import Card from '@/workshop/session2/awnsers/core/composition/card'

const ProductCard = ({
  data,
  key,
  handleClick,
  active,
  notForSale,
  variant = 'grid',
}) => {
  return (
    <Card key={key} variant={variant}>
      <Card.Media {...data.media} width={300} />
      <Card.Content>
        <Card.Title title={data.productName} id={data.id} />
        <Card.Description description={`${data.brand} | ${data.price}`} />
        {!notForSale && (
          <Card.Button
            handleClick={handleClick}
            text={`${active ? 'Remove From' : 'Add To'} Cart`}
          />
        )}
      </Card.Content>
    </Card>
  )
}
export default ProductCard
