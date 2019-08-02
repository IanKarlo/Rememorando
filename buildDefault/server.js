var express = require('express')
var app = express()
app.use(express.static('./'));
app.listen(2000, () => (console.log('ok')))