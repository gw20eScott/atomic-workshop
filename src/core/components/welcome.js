// Import styled components
import styled from 'styled-components'

// Create a styled div
const WelcomeComponentWrapper = styled.div`
  padding: 40px;
  text-align: center;
`

// React component, that uses the styled div
const WelcomeComponent = ({ error }) => {
  return (
    <WelcomeComponentWrapper>
      {!error && <>Your NextJS Application is working as intended</>}
      {error && <> Your application has thrown an error </>}
    </WelcomeComponentWrapper>
  )
}
export default WelcomeComponent
