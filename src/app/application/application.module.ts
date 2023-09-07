import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { BudgetComponent } from './project/single/budget/budget.component';
import { BudgetComponent as NewProjectBudgetComponent } from './project/new/budget/budget.component';
import { InfoComponent as NewProjectInfoComponent } from './project/new/info/info.component';
import { TicketsComponent as ProjectTicketsComponent } from './project/single/tickets/tickets.component';
import { EditComponent as  EditTicketComponent} from './tickets/single/edit/edit.component';
import { ViewComponent as TicketViewComponent } from './tickets/single/view/view.component';
import { AllComponent } from './tickets/all/all.component';
import { EditComponent as EditBudgetComponent } from './project/single/budget/edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { SingleComponent as ProjectSingleComponent } from './project/single/single.component';
import { SingleComponent as TicketsSingleComponent} from './tickets/single/single.component';
import { ViewComponent as BudgetViewComponent } from './project/single/budget/view/view.component';
import { EditComponent } from './tickets/single/edit/edit.component';
import { ViewComponent } from './tickets/single/view/view.component';
import { NewComponent } from './project/new/new.component';
import { InfoComponent } from './project/new/info/info.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    HomeComponent,
    ProjectComponent,
    BudgetComponent,
    NewProjectBudgetComponent,
    ProjectTicketsComponent,
    TicketsComponent,
    EditTicketComponent,
    TicketViewComponent,
    AllComponent,
    ProjectSingleComponent,
    TicketsSingleComponent,
    EditTicketComponent,
    EditBudgetComponent,
    BudgetViewComponent,
    EditComponent,
    ViewComponent,
    NewComponent,
    InfoComponent,
    NewProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ApplicationModule { }
