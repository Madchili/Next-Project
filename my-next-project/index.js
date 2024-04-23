const http = require('http')

const app = http.createServer((request, response) => {
  let code = 404
  if (request.url === '/') {
    code = 200
    response.write('Hejsan svejsan')
  } else if (request.url === '/bar') {
   code = 200
    response.write('bar')
  } else if (request.url === '/baz') {
    code = 200
    response.write('qux')
  }
    else if (request.url === '/foo') {
    code = 200
    response.write('bar')
    }
    else {
    response.statusCode = code
  }

  response.end()
})

app.listen({ port: 8080 }, () => {
  console.log('Redo på http://localhost:8080/')
})
