import { Component, OnInit } from '@angular/core';
import TaskModel from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit{

  public tasks: TaskModel[] = [];

  public constructor(private taskService: TaskService) { }

  public async ngOnInit() {
      try {
          this.tasks = await this.taskService.getAllTasks();
      }
      catch (err: any) {
          alert(err.message);
      }
  }


}
