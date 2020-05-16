const express = require('express');
const app = express();
const port = process.env.PORT || 4001;


const categoryRouter = require('./routes/category');
const departmentsRouter = require('./routes/departments');
const productsRouter = require('./routes/products');
const suplierRouter = require('./routes/suplier')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/category', categoryRouter);

app.use('/departments', departmentsRouter);

app.use('/products', productsRouter);

app.use('/suplier', suplierRouter)


app.listen(port, () => {
    console.log('They are listening on:', port)
});