const mongoose = require("mongoose");


module.exports = mongoose
.connect(process.env.MONGO_DB_URL_1)
.then(() => console.log(" Mongo DB 1 Connection Successfull!"))
.catch((err) => {
  console.log(err);
});

