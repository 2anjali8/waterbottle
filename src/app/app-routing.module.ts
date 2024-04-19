import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { SingleReportComponent } from './pages/single-report/single-report.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HelppComponent } from './pages/helpp/helpp.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to welcome page by default
  { path: 'signup', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'report', component : ReportsComponent },
      { path: 'report/:type/:id',component:SingleReportComponent},
      {path: 'users',component:UsersComponent},
      {path: 'help',component:HelppComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
