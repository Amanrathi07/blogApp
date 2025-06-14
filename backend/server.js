const express = require("express");
const cors = require('cors');


const userRoute = require("./Routes/userRoutes");
const dbConect = require("./Config/db");
const blogRoute = require("./Routes/blogRoutes");



const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/v1',userRoute);
app.use("/api/v1",blogRoute)


app.listen(3000, () => {

    console.log("server start");
    dbConect();

});
