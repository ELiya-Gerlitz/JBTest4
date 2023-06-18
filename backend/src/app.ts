import express from "express"
import cors from "cors"
import router from "./06-Controllers/router"
import appConfig from "./02-Utils/appConfig"


const server= express()
server.use(cors())
server.use(express.json())

server.use("/api" , router)


server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))


console.log("i am app")