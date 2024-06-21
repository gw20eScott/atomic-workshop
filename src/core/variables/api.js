// @TODO - switch this to a .env or build time variable
export const url = 'https://domain.com/'

// headers for the GET / Server side requests
// if you need other headers, they should be in a client side request header
export const getHeaders = {
  method: 'GET',
  redirect: 'follow',
  next: { revalidate: 900 },
}
