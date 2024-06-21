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

    .cardImage {
        width: 100%;
        height: 440px;
        overflow: hidden;

        img {
            object-fit: contain;
            height: 100%;
            width: 100%;
            object-position: center center;
        }
    }

    &.card-list {
        width: 100%;
        display: block;

        .cardContent,
        .cardImage {
            width:calc(100% - 200px);
            display: inline-block;
            vertical-align: top;
        }

        .cardImage {
            width: 200px;
            height: 140px;

            img {
                
            }
        }
    }
`

const CardImage = styled.div``

const CardButton = styled.div``

const Card = ({ children, variant, key }) => {
    return <CardWrapper key={key} className={`productCard card-${variant}`}>
        {children}
    </CardWrapper>
}
Card.Title = ({ title, id }) => {
    return <Link href={`/session3/${id}`} className='cardTitle'>
        <CardTitle> {title} </CardTitle>
    </Link>
}
Card.Media = (props) => {
    return <CardImage className='cardImage'>
        <MediaElement {...props} variant='onlyImage' />
    </CardImage>
}
Card.Description = ({ description }) => {
    return <P className='cardDesc'> {description} </P>
}
Card.Button = ({ handleClick, text }) => {
    return <CardButton className='cardButton'>
        <Button handleClick={handleClick} variant='primary'>
            {text}
        </Button>
    </CardButton>
}
Card.Content = ({ children }) => {
    return <div className='cardContent'>
        {children}
    </div>
}

export default Card