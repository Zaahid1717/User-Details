console.log("Starting script...");
const express = require("express");
const app = express();
const db = require("./config/db")
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./router/userRouter");

(()=>{
    app.use (express.json());
    app.use(
        cors({
            origin: "*",
              })
           );
    
    db(process.env.MONGO_URL);
    app.use("/", userRouter);
})();

app.listen(
    process.env.PORT || 3001, 
    () => {
    console.log(`Server running in ${process.env.PORT || 3001}`); 
          }
          ); 
