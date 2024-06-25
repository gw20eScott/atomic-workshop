import styled from 'styled-components'

const base = `
    outline: 0;
    border: 2px solid #000;
    padding: 12px 22px;
    border-radius: 6px;
`

const primary = `
    color: #fff;
    background: #000;
`
const secondary = `color: #000;`

export const PrimaryButton = styled.button`
  ${base}
  ${primary}
`

export const SecondaryButton = styled.button`
  ${base}
  ${secondary}
`

export const PrimaryLink = styled.a`
  ${base}
  ${primary}
`

export const SecondaryLink = styled.a`
  ${base}
  ${secondary}
`

const Button = ({
  variant = 'primary',
  children,
  type = 'button',
  href = '#',
  handleClick = () => {},
}) => {
  const Element =
    type === 'button'
      ? variant === 'primary'
        ? PrimaryButton
        : SecondaryButton
      : variant === 'primary'
      ? PrimaryLink
      : SecondaryLink

  if (type === 'button') {
    return <Element onClick={handleClick}> {children} </Element>
  }

  return <Element href={href}> {children} </Element>
}

export default Button
