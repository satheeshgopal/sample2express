const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', (req, res) => res.json([new Product(3, 'cherry'), new Product(4, 'kiwi')]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

class Product{
    constructor(id, name)
    {
        this.id = id;
        this.name=name;
    }
}