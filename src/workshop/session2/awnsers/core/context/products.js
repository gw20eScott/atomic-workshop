'use client'
import React from 'react'

// My context
const GlobalContext = React.createContext()

// Use context hook
export const useProductContext = () => {
    const context = React.useContext(GlobalContext)
    if (context === undefined) {
        throw new Error('useProductContext must be used within the Provider')
    }
    return context
}

// Provider
const ProductsProvider = ({ children }) => {
    const [state, setState] = React.useState([])

    const setSelectedProducts = (productName) => {
        let newArray = [...state]

        if(newArray.indexOf(productName) >= 0) {
            newArray = newArray.filter(item => item !== productName)
        } else {
            newArray.push(productName)
        }
        setState(newArray)
    }

    // Provider layer
    return (
        <GlobalContext.Provider
            value={{
                activeProducts: state,
                setSelectedProducts,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default ProductsProvider
