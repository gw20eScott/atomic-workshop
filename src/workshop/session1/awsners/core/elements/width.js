import styled from "styled-components";

const Width = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    ${props => props.isRelative ? 'position: relative;' : ''}
`

const WidthContainer = ({ children, isRelative }) => {
    return <Width isRelative={isRelative}>
        {children}
    </Width>
}

export default WidthContainer