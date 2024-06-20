'use client'
import Image from 'next/image'
import ClientApp from '@/core/app/clientApp'
import Navigation from '@/core/modules/navigation'
import { PageTitle, P } from '@/workshop/session2/awnsers/core/elements/typo'

import styled from 'styled-components'

const MediaContainer = styled.div`
  width: 600px;
  position: relative;
  height: 600px;
  margin: 0 auto;
`

export default function FeaturedProducts({ data }) {
  console.log('xxxxxx', data)
  return <ClientApp>
    <Navigation />

    <PageTitle>
      {data.item.productName}
    </PageTitle>
    <MediaContainer>
      <Image {...data.item.media} layout='fill' objectFit='contain' />
    </MediaContainer>

    <P style={{ whiteSpace: 'pre-wrap' }}>
      {data.item.productDesc}
    </P>
  </ClientApp>
}
