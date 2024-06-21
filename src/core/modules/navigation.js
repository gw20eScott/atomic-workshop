import styled from 'styled-components'
import Link from 'next/link'

const NavigationWrapper = styled.div`
  text-align: center;
  padding: 22px 0;
  border-bottom: 1px solid #000;

  a {
    font-size: 18px;
    font-weightg: 700;
  }

  li {
    padding: 0px 22px;
  }
`

const NavigationModule = () => {
  return (
    <NavigationWrapper>
      <ul>
        <li>
          <Link href="/session3/"> Homepage </Link>
        </li>
        <li>
          <Link href="/session3/featured"> Featured Products </Link>
        </li>
      </ul>
    </NavigationWrapper>
  )
}

export default NavigationModule
