import HomePage from '@/core/pages/session3.home'

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

async function staticData() {
  const pageResponse = {
    data: {
      title: 'Products',
      showToggles: true,
      data: response.data,
      description: 'The following products are at a discount.',
    },
    metaData: {
      title: 'Homepage product list',
      description: 'List of decent products for sale',
    },
  }

  return pageResponse
}

//
// This API call will get the data used to generate the page
// @WARNING
// It does the API call at the same time as the getData() request above
// HOWEVER: it'll bundle the response for both! so only 1 request and resolution is made.

export async function generateMetadata() {
  // fetch data
  const { metaData } = await staticData()

  return {
    ...metaData,
  }
}

export default async function Root() {
  const { data } = await staticData()

  return <HomePage data={data} />
}
