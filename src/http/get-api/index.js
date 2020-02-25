exports.handler = async function http (req) {
  console.log('Begin API called')
  let headers = {
    'content-type': 'application/json; charset=utf8',
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
  }
  if (process.env.NODE_ENV === 'testing') {
    headers = Object.assign(headers, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
  }
  return {
    headers,
    body: JSON.stringify({
      msg: 'Hello from Nuxt + your Begin API!'
    })
  }
}

