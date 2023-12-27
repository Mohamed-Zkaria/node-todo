const express = require('express')
const app = express()
const port = 3000
const dbUrl = "mongodb://127.0.0.1:27017/nodetodo"

const todoRouter = require('./routes/todo')

app.use("/todo",todoRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})