const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000
const dbUrl = "mongodb://127.0.0.1:27017/nodetodo"

const { TodoRouter } = require('./routes')

app.use((req, res, next) => {
  console.log(`\n\n${new Date().toISOString()}`);
  console.log(`new request, its method: ${req.method}`);
  console.log(`the url requested: ${req.url}\n`);
  next();
});

app.use("/todo",TodoRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect(dbUrl).catch(err=>{
  console.log("error", err)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})