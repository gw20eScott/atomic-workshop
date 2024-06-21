import styled from 'styled-components'

import Link from 'next/link'

import Button from '@/workshop/session1/awnsers/core/elements/button'
import { CardTitle, P } from '@/workshop/session1/awnsers/core/elements/typo'
import MediaElement from '@/workshop/session1/awnsers/core/elements/image'

const CardWrapper = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  width: 300px;
  text-align: center;

  button {
    display: block;
    width: 100%;
  }
`

const CardImage = styled.div`
  width: 100%;
  height: 440px;
  overflow: hidden;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    object-position: center center;
  }
`

const CardButton = styled.div``

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>
}
Card.Title = ({ title, id }) => {
  return (
    <Link href={`/session3/${id}`}>
      <CardTitle> {title} </CardTitle>
    </Link>
  )
}
Card.Media = (media) => {
  return (
    <CardImage>
      <MediaElement {...media} variant="onlyImage" />
    </CardImage>
  )
}
Card.Description = ({ description }) => {
  return <P> {description} </P>
}
Card.Button = ({ handleClick, text }) => {
  return (
    <CardButton>
      <Button handleClick={handleClick} variant="primary">
        {text}
      </Button>
    </CardButton>
  )
}

export default Card
