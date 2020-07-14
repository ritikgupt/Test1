const express = require('express')
const compression = require('compression')
const mongoose = require('mongoose')
const screenRoutes = require('./routes/screen')
const ticketRoutes = require("./routes/ticket");
const port = process.env.PORT||5000
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(compression())
app.use(screenRoutes);
app.use(ticketRoutes)
require("dotenv").config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
var connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.get('/',(req,res)=>{
    res.send('Ready for the project!!')
})

app.listen(port,()=>{
    console.log('server is listening on port 3000')
})