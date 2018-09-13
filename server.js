const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;
const SHARES = [];

const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use(authenticate);
app.use("/irrigationShares", requrie("./routes/irrigationShares"));
app.listen(8080, () => console.log(`server flowing on port ${PORT}`));