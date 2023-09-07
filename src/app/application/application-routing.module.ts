import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AllComponent as TicketsAllComponent } from './tickets/all/all.component';
import { AllComponent as ProjectAllComponent } from './project/all/all.component';
import { EditComponent as EditTicketComponent } from './tickets/single/edit/edit.component';
import { ViewComponent as TicketViewComponent } from './tickets/single/view/view.component';
import { ViewComponent as BudgetViewComponent } from './project/single/budget/view/view.component';
import { EditComponent as EditBudgetComponent} from './project/single/budget/edit/edit.component';
import { ProjectComponent } from './project/project.component';
import { BudgetComponent } from './project/single/budget/budget.component';
import { SingleComponent as ProjectSingleComponent } from './project/single/single.component';
import { SingleComponent as TicketsSingleComponent} from './tickets/single/single.component';
import { BudgetComponent as NewProjectBudgetComponent } from './project/new/budget/budget.component';
import { InfoComponent as NewProjectInfoComponent } from './project/new/info/info.component';
import { NewComponent as NewProjectComponent } from './project/new/new.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'application',
  pathMatch: 'full'
}, {
  path: 'application',
  component: ApplicationComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'tickets',
    component: TicketsComponent,
    children: [{
      path: '',
      component: TicketsAllComponent
    }]
  }, {
    path: 'ticket',
    component: TicketsComponent,
    children:[{
      path: '',
      component: TicketsSingleComponent,
      children: [{
        path: ':id/edit',
        component: EditTicketComponent
      }, {
        path: 'new',
        component: EditTicketComponent
      }, {
        path: ':id',
        component: TicketViewComponent
      }]
    }]
  }, {
    path: 'project',
    component: ProjectComponent,
    children: [{
      path: '',
      component: ProjectAllComponent
    }, {
      path: 'new',
      component: NewProjectComponent,
      children: [{
        path: '',
        component: NewProjectInfoComponent,
      }, {
        path: 'budget',
        component: NewProjectBudgetComponent,
      }]
    }, {
      path: 'edit/:id',
      component: NewProjectComponent,
      children: [{
        path: '',
        component: NewProjectInfoComponent,
      }, {
        path: 'budget',
        component: NewProjectBudgetComponent,
      }]
    }, {
      path: ':id',
      component: ProjectSingleComponent,
      children: [{
        path: 'budget',
        component: BudgetComponent,
        children: [{
              path: '',
              component: BudgetViewComponent
        }, {
              path: 'edit',
              component: EditBudgetComponent
        }, {
              path: 'new',
              component: EditBudgetComponent
        }]
      }, {
        path: 'tickets',
        component: TicketsComponent
      }]
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
