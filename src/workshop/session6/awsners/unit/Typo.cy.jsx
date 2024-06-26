import { CardTitle, PageTitle, P } from '@/workshop/session4/awsners/core/elements/typo'

const BaseComponent = ({ type, children }) => {
    const typoElement = {
      CardTitle,
      PageTitle,
      P
    }

    const Element = typoElement[type]

    return <Element> {children} </Element>
}

describe('Session 6 - Typo.cy.jsx - Card Title', () => {
  it('Happy path - render the typo element: card title', () => {
    cy.mount(<BaseComponent type='CardTitle'> Card Title </BaseComponent>)

    cy.contains('h3', 'Card Title')
  })
})

describe('Session 6 - Typo.cy.jsx - Page Title', () => {
  it('Happy path - render the typo element: page title', () => {
    cy.mount(<BaseComponent type='PageTitle'> Page Title </BaseComponent>)

    cy.contains('h1', 'Page Title')
  })
})

describe('Session 6 - Typo.cy.jsx - Paragraph Title', () => {
  it('Happy path - render the typo element: paragraph', () => {
    cy.mount(<BaseComponent type='P'> Etiam efficitur quam odio, eget ultricies augue cursus vel. Cras eget varius quam. Proin vel mollis nisl. Nam scelerisque vestibulum accumsan. Sed efficitur erat est, ut sollicitudin metus finibus ut. Nullam ac pretium elit. Nulla sed nunc quis dui ultrices vestibulum. Ut id auctor dolor. Proin ut vulputate lorem. </BaseComponent>)

    cy.contains('p', 'quam')
  })
})