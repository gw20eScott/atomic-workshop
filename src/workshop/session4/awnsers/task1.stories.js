import response from '@/workshop/_mockdata_/_session3_products'
import { useState } from 'react'

import FormManager from './core/module/task4.dataui'

const StoryWrapper = (props) => {
  const [state, setState] = useState(response.data)

  const updateState = (key, value) => {
    setState((oldstate) => {
      return {
        ...oldstate,
        [key]: value
      }
    })
  }

  return <div>
    <FormManager
      updateState={updateState}
      schema={props.data}
      data={state} />
  </div>
}

export default {
  component: StoryWrapper,
  args: {
    data: [
      {
        name: 'Product name',
        type: 'Text',
        key: 'productName',
        validation: {
          length: 5,
        }
      },
      {
        name: 'Description',
        type: 'Textarea',
        key: 'productDesc',
        validation: {
          length: 300
        }
      },
      {
        name: 'Brand',
        type: 'Select',
        key: 'brand',
        options: [
          {
            name: 'Apple',
            value: 'Apple'
          },
          {
            name: 'Google',
            value: 'Google'
          }
        ]
      }
    ]
  }
}

export const ProductManagement = {};