import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { TaskTableComponent } from './components/task-area/task-table/task-table.component';
import { TaskAddComponent } from './components/task-area/task-add/task-add.component';


const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "tasks", component : TaskTableComponent},
  {path : "add-task", component : TaskAddComponent},
 

  {path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> exact empty string,
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
