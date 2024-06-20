'use client'
import Container from '@/core/components/session3.wrapper'
import ProductsProvider from '@/workshop/session2/awnsers/core/context/products'

const Session3Layout = ({ children }) => {
    return <Container>
        <ProductsProvider>
            {children}
        </ProductsProvider>
    </Container>
}

export default Session3Layout