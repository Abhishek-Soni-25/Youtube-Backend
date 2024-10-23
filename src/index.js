import dotenv from "dotenv"

import connectDB from "../src/db/db.js"
import {app} from "../src/app.js"

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("FILE [index.js] \n", err)
})