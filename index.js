require("dotenv").config();
const express = require("express");
const app = express();

const authRoute = require("./router/v1/auth");
const userRoute = require("./router/v1/user");
const productRoute = require("./router/v1/product");
const cartRoute = require("./router/v1/cart");
const orderRoute = require("./router/v1/order");



app.use(require("cors")());
app.use(express.json())

require("./db/mongo/connection_1");

app.use('/api/v1/auth', authRoute );
app.use('/api/v1/user', userRoute );
app.use('/api/v1/product', productRoute);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/order', orderRoute);




app.listen(process.env.PORT || 5000, ()=> console.log("App is running on port "+process.env.PORT+ " ")) 