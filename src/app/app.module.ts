import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageGoalsComponent } from './page-goals/page-goals.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AddGoalComponent } from './add-goal/add-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGoalsComponent,
    BottomBarComponent,
    AddGoalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
