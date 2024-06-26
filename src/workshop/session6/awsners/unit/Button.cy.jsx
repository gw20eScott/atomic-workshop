import Button from '@/workshop/session4/awsners/core/elements/button'

const BaseComponent = ({ type, variant, children, href, handleClick }) => {
    return <Button handleClick={handleClick} href={href} type={type} variant={variant}>
      {children}
    </Button>
}

describe('Session 6 - Button.cy.jsx - Primary Button', () => {
  it('Happy path - render the button element: primary', () => {
    cy.mount(<BaseComponent
      variant='primary'
      type='button'
      handleClick={() => {}}
    >
      Primary Button
    </BaseComponent>)

    cy.contains('button', 'Primary Button')
  })
})

describe('Session 6 - Button.cy.jsx - Primary Link', () => {
  it('Happy path - render the button element: primary', () => {
    cy.mount(<BaseComponent
      variant='primary'
      type='link'
      href='test link'
    >
      Primary Link
    </BaseComponent>)

    cy.contains('a', 'Primary Link')
  })
})

describe('Session 6 - Button.cy.jsx - secondary Button', () => {
  it('Happy path - render the button element: secondary', () => {
    cy.mount(<BaseComponent
      variant='secondary'
      type='button'
      handleClick={() => {}}
    >
      Secondary Button
    </BaseComponent>)

    cy.contains('button', 'Secondary Button')
  })
})

describe('Session 6 - Button.cy.jsx - Secondary Link', () => {
  it('Happy path - render the button element: secondary', () => {
    cy.mount(<BaseComponent
      variant='secondary'
      type='link'
      href='test link'
    >
      Secondary Link
    </BaseComponent>)

    cy.contains('a', 'Secondary Link')
  })
})