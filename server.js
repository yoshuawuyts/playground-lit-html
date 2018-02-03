var http = require('http')
var path = require('path')
var fs = require('fs')

var port = 3000

http.createServer(function (req, res) {
  res.end(fs.readFileSync(path.join(__dirname, 'index.html')))
}).listen(port, () => console.log(`listening on port ${port}`))
