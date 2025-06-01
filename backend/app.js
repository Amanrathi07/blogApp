const express = require("express");
const cors = require('cors');


const userRoute = require("./Routes/userRoutes");
const dbConect = require("./Config/db");



const app = express();



app.use(cors());
app.use(express.json());


app.use('/v1',userRoute);


app.listen(3000, () => {

    console.log("server start");
    dbConect();

});
