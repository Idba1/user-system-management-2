const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {
      name: "Alice", email: "alice@example.com"
    },
    {
      name: "Bob", email: "bob@example.com"
    },
    {
      name: "Charlie", email: "charlie@example.com"
    },
    {
      name: "David", email: "david@example.com"
    },
    {
      name: "Eve", email: "eve@example.com"
    },
    {
      name: "Frank", email: "frank@example.com"
    },
    {
      name: "Grace", email: "grace@example.com"
    }
  ];
  

app.get('/', (req, res) => {
    res.send('User manager server is running')
  })

app.get('/users', (req, res) => {
    res.send(users)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })