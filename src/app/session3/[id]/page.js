import DetailPage from '@/core/pages/session3.detail'
// import { url, getHeaders } from '@/core/variables/api'

import response from '@/workshop/_mockdata_/_session3_products'

//
// This API call will get the data used to generate the page
// async function getData() {
//   const res = await fetch(`${url}/api`, getHeaders)
//   const data = res.json()

//   // If there is no data, we can throw an error, this will render the 404 page
//   if (!data) {
//     console.error('not found')
//   }
//   return data
// }

async function staticData(id) {
  const item = response.data.filter((item) => item.id === parseInt(id))[0]
  const pageResponse = {
    data: {
      title: 'Product Detail Page',
      item,
    },
    metaData: {
      title: `${item.productName} in ${item.productMetaData.color}`,
      description: '',
    },
  }

  return pageResponse
}

//
// This API call will get the data used to generate the page
// @WARNING
// It does the API call at the same time as the getData() request above
// HOWEVER: it'll bundle the response for both! so only 1 request and resolution is made.

export async function generateMetadata({ params }) {
  // fetch data
  const { metaData } = await staticData(params.id)

  return {
    ...metaData,
  }
}

export default async function Page({ params }) {
  const { data } = await staticData(params.id)

  return <DetailPage data={data} />
}
