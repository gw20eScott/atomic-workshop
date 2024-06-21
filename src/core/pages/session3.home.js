'use client'
import Navigation from '@/core/modules/navigation'
import { useProductContext } from '@/workshop/session2/awnsers/core/context/products'

import ProductModule from '@/workshop/session2/awnsers/core/module/task3.products'
import CartModule from '@/workshop/session2/awnsers/core/module/task2.cart'

export default function HomePage({ data }) {
    const { activeProducts, setSelectedProducts } = useProductContext()
    return <>
        <Navigation />
        <ProductModule
            {...data}
            activeProducts={activeProducts}
            handleClick={setSelectedProducts}
        />
        <CartModule activeProducts={activeProducts} />
    </>
}
