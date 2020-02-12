import { HomePage } from './../home/home.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [

      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'occupation',
        loadChildren: () => import('../occupation/occupation.module').then(m => m.OccupationPageModule)
      },
      {
        path: 'matarialStatus',
        loadChildren: () => import('../martialstatus/matrialstatus.module').then(m => m.MatialstatusPageModule)
      },
      {
        path: 'qualAndSal',
        loadChildren: () => import('../qualificationandsalary/qualificationandsalary.module').then(m => m.QulaificationandsalaryPageModule)
      },
      {
        path: 'countryAndExp',
        loadChildren: () => import('../countryandexpenditure/countryAndExpenditure.module').then(m => m.CountryAndExpediturePageModule)
      },
      {
        path: 'loanOrGoal',
        loadChildren: () => import('../loanorgoal/loanAndGoal.module').then(m => m.LoanOrGoalPageModule)
      },
      {
        path: 'studentLoan',
        loadChildren: () => import('../loaninfo/loanInfo.module').then(m => m.LoanInfoPageModule)
      },
      {
        path: 'personalGoal',
        loadChildren: () => import('../goalinfo/goalinfo.module').then(m => m.GoalInfoPageModule)
      },
      {
        path: 'ordersummary',
        loadChildren: () => import('../ordersummary-info/ordersummary-info.module').then(m => m.OrderSummaryInfoPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../invest-portfolio/invest-prtfolio.module').then(m => m.InvestPortFolioPageModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../wallat-info/walletinfo.module').then(m => m.WalletInfoPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../logout/logout.module').then(m => m.LogoutPageModule)
      }

    ]
  },
  {
    path: '',
    redirectTo: '/menu/home'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
