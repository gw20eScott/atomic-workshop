import HomePage from '@/core/pages/home'

import { url, getHeaders } from '@/core/variables/api'

//
// This API call will get the data used to generate the page
async function getData() {
  const res = await fetch(`${url}/api`, getHeaders)
  const data = res.json()

  // If there is no data, we can throw an error, this will render the 404 page
  if (!data) {
    console.error('not found')
  }
  return data
}

//
// This API call will get the data used to generate the page
// @WARNING
// It does the API call at the same time as the getData() request above
// HOWEVER: it'll bundle the response for both! so only 1 request and resolution is made.

// export async function generateMetadata() {
//   // fetch data
//   const { data } = await getData()

//   const metaData = convertMetaData(data?.head)

//   return {
//     ...metaData,
//   }
// }

export default function Root() {
  // const { data } = await getData()

  return <HomePage />
}
