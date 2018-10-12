const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;
const morgan = require('morgan');

app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(logger);
// app.use(authenticate);
app.use("/owners", require("./routes/owners.js"));

mongoose.connect('mongodb://localhost:27017/owners', {useNewUrlParser: true})
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.error(err));
    
app.listen(PORT, () => console.log(`server flowing on port ${PORT}`));

