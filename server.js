const express = require("express");
const app = express();
const routes = require("./routes");
const handler = require('./handlers/users');
const bodyParser = require('body-parser')

const port = 5500;
app.use(bodyParser.json());
routes(app);
handler(app);
app.listen(port, ()=>{
  console.log(`server is running at ${port}`)
})