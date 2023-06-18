import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AsideComponent } from './components/layout-area/aside/aside.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { TaskTableComponent } from './components/task-area/task-table/task-table.component';
import { TaskAddComponent } from './components/task-area/task-add/task-add.component';

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    PageNotFoundComponent,
    TaskTableComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent] 
})
export class AppModule { }
