const express = require('express')
const router =  require('express').Router()
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 


let products = ['jbaby', 'shampoo']

router.get("/products", (req, res)=>{
    res.json(products)
})

router.post("/products", (req, res)=>{
     products = [...products, req.body.product]
     res.json(products)
})

router.delete("/products/:id", (req, res)=>{
    const id = req.params['id']
    products = products.filter((item)=> id != item   )
    res.json(products)

})

app.use(router)


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

