import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import ejs from "ejs"

const app = express()

app.set('view engine', 'ejs')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

import userRoute from "./routes/user.route.js"

app.use("/api/v1/users", userRoute)

export {app}