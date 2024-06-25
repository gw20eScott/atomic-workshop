import response from '@/workshop/_mockdata_/_session3_products'
import { useState } from 'react'

import FormManager from './core/module/task4.dataui'

const StoryWrapper = (props) => {
  const [state, setState] = useState(response.data[0])

  const updateState = (key, value) => {
    setState((oldstate) => {
      return {
        ...oldstate,
        [key]: value,
      }
    })
  }

  return (
    <div>
      <FormManager updateState={updateState} schema={props.data} data={state} />
    </div>
  )
}

// @TODO - min / max length
export default {
  component: StoryWrapper,
  args: {
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
  },
}

export const ProductManagement = {}
