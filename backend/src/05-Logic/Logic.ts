
import OkPacket from "mysql"
import dal from "../02-Utils/dal"
import TaskModel from "../04-Models/TaskModel"



async function getAllTasks():Promise<TaskModel[]>{
    // CONCAT(DATE_FORMAT(M.startDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.startDate, '%H:%i')) AS 'startDate',
    const sql = `
    SELECT T.*, U.name
    FROM tasks as T LEFT JOIN users as U
    ON T.customerId = U.userId
    `
    const tasks = await dal.execute(sql)
    return tasks
}

async function getAllCustomers():Promise<TaskModel[]>{
    // CONCAT(DATE_FORMAT(M.startDate, '%d.%m.%Y') , ' ' ,TIME_FORMAT(M.startDate, '%H:%i')) AS 'startDate',
    const sql = `
    SELECT * FROM users 
    `
    const tasks = await dal.execute(sql)
    return tasks
}

async function addTask( task :TaskModel):Promise<TaskModel>{
    task.created = false
    const sql = `
    INSERT INTO tasks
    VALUES (
        DEFAULT,
        ?,
        ?,
        ?,
        ?
    )
    `
    const values = [task.description, task.dateCreated, task.customerId, task.created]
    const info : OkPacket = await dal.execute(sql, values)
    
    task.taskId = info.insertId
    return task
}

async function deleteOneTask(taskId :number):Promise<void>{
    const sql = `
   DELETE FROM tasks 
   WHERE taskId = ?
    
    `
    const info : OkPacket = await dal.execute(sql, [taskId])
    //if(info.affectedRows === 0) throw new ErrorModel...
}



export default {
    getAllTasks,
    addTask,
    getAllCustomers,
    deleteOneTask
  
}