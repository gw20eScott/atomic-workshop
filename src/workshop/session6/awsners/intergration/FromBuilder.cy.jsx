import {useState} from 'react'

import FormBuilder from '@/workshop/session4/awsners/core/module/task4.dataui'
import response from '@/workshop/_mockdata_/_session3_products'

const staticData = {
  data: [
    {
      name: 'Product name',
      type: 'Text',
      dataKey: 'productName',
      validation: {
        minLength: 5,
      },
    },
    {
      name: 'Description',
      type: 'Textarea',
      dataKey: 'productDesc',
      validation: {
        minLength: 300,
        maxLength: 1000,
      },
    },
    {
      name: 'Brand',
      type: 'Select',
      dataKey: 'brand',
      options: [
        {
          name: 'Apple',
          value: 'Apple',
        },
        {
          name: 'Google',
          value: 'Google',
        },
      ],
    },
  ],
}

const BaseComponent = () => {
  const [state, setState] = useState(response.data[0])

    const updateState = (key, value) => {
      setState((oldstate) => {
        return {
          ...oldstate,
          [key]: value,
        }
      })
    }

    return <FormBuilder
      updateState={updateState}
      schema={staticData.data}
      data={state}
    />
}

describe('Session 6 - FromBuilder.cy.jsx', () => {
  it('Happy path - does all the forms render', () => {
    cy.mount(<BaseComponent />)
    cy
      .contains('label', 'Product name')
      .parent()
      .find('input')
      .focus()
      .clear()
      .type(' - Refurbished')
      .should('have.value', 'Iphone 10 - Refurbished')

    cy
      .contains('label', 'Brand')
      .parent()
      .find('select')
      .select('Google')
      .should('have.value', 'Google')
  })
})