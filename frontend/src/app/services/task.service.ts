import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Injectable } from '@angular/core';
import TaskModel from "../models/TaskModel";
import { appConfig } from "../utils/appConfig";
import CustomerModel from "../models/CustomerModel";

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
public async getAllCustomers(): Promise<CustomerModel[]> {
  const observable = this.http.get<CustomerModel[]>(appConfig.customerURL)
  const customers =  await firstValueFrom(observable)
  return customers
}

public async addTask( task : TaskModel): Promise<void> {
  const observable = this.http.post<TaskModel>(appConfig.tasksURL, task)
  const taskAdded =  await firstValueFrom(observable) //this line is a MUST!!!!!! Does NOT work otherwise!
}

public async deleteItem( taskId :number): Promise<void> {
  const observable = this.http.delete<void>(appConfig.tasksURL + taskId)
  const prods =  await firstValueFrom(observable) //this line is a MUST!!!!!! Does NOT work otherwise!
}

}
