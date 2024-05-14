'use client'

import StyledComponentsRegistry from './styledComponentsRegistry'

const ClientApp = ({ children }) => {
    return <StyledComponentsRegistry>
        {children}
    </StyledComponentsRegistry>
}
export default ClientApp