const http=require('http')
const server=http.createServer((req,res) => {
   if(req.url === '/') {
      res.end("Welcome")
   }
   if(req.url === '/about') {
      res.end("this is about page")
   }
   res.write(`
   <h1>oops</h1>
   <a href="/">back home</a>`)
})
server.listen(3000,"localhost",()=>
   console.log('server is running on port 3000'));