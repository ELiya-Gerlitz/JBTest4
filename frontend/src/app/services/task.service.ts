import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Injectable } from '@angular/core';
import TaskModel from "../models/TaskModel";
import { appConfig } from "../utils/appConfig";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  public async getAllTasks(): Promise<TaskModel[]> {
    const observable = this.http.get<TaskModel[]>(appConfig.tasksURL)
    const products =  await firstValueFrom(observable)
    return products
}
}
