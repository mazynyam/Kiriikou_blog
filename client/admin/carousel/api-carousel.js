import queryString from 'query-string'

const create = async (params, credentials, carousel) => {
  try {
    let response = await fetch('/api/carousel/new', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: carousel
      })
      return response.json()
    }catch(err) {
      console.log(err)
    }
}

const read = async ( signal) => {
  try {
    let response = await fetch('/api/carousel', {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch(err) {
    console.log(err)
  }
}

const update = async (params, credentials, carousel) => {
  try {
    let response = await fetch('/api/carousel/'+params.carouselId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: carousel
    })
    return response.json()
  } catch(err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    let response = await fetch('/api/carousel/' +params.productId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return response.json()
  } catch(err) {
    console.log(err)
  }
}
export{
    create,
    read,
    update,
    remove
}