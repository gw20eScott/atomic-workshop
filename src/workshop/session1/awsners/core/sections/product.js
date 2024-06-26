import styled from "styled-components"

import { PageTitle, P } from '@/workshop/session1/awsners/core/elements/typo'
import PageWrapper from '@/workshop/session1/awsners/core/elements/width'
import ProductModule from '@/workshop/session1/awsners/core/module/task5.products'

const SectionWrapper = styled.div``

const Section = ({ data, title, desc, link }) => {
    return <SectionWrapper>
        <PageWrapper>
            <PageTitle> {title} </PageTitle>
            <P> {desc} </P>

            <ProductModule data={data} />

            <div className='productLink'>
                {
                    link && link.href && <a href={link.href}>
                        {link.text}
                    </a>
                }
            </div>
        </PageWrapper>
    </SectionWrapper>
}
export default Section