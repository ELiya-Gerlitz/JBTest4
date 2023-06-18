import { Component, OnInit } from '@angular/core';
import CustomerModel from 'src/app/models/CustomerModel';
import TaskModel from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit{

  public task = new TaskModel()
  public customers : CustomerModel[]

  
  public constructor( private taskService : TaskService,  private router: Router) {}

  public async ngOnInit():Promise<void> {
    try{
      this.customers = await this.taskService.getAllCustomers()

      }catch(err:any){
        console.log(err)
      }
  }

  // public time(){
  //   const now= new Date()
  //   const date1 = now.getDate()
  //   this.task.dateCreated = date1
  // }

  public async send():Promise<void>{
    try{
        this.taskService.addTask(this.task)
        alert("product successfully added!")
        this.router.navigateByUrl("/home");


    }catch(err:any){
      console.log(err)
    }
  }


  

}
