import express, { NextFunction, Request, Response } from "express"
import Logic from "../05-Logic/Logic"
import TaskModel from "../04-Models/TaskModel"




const router= express.Router()



router.get("/tasks", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const tasks = await Logic.getAllTasks()
        response.json(tasks)
    }catch(err:any){
        next(err)
    }
})

router.get("/customers", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const customers = await Logic.getAllCustomers()
        response.json(customers)
    }catch(err:any){
        next(err)
    }
})

router.post("/tasks", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const taskToAdd = new TaskModel(request.body)
        const addedTask = await Logic.addTask(taskToAdd)
        response.status(201).json(addedTask)
    }catch(err:any){
        next(err)
    }
})

router.delete("/tasks/:taskId", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const taskId = + request.params.taskId
        await Logic.deleteOneTask(taskId)
        response.sendStatus(204)
    }catch(err:any){
        next(err)
    }
})




export default router