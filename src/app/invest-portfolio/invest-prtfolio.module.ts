import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InvestPortfolioComponent } from './invest-portfolio.component';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';





@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        RouterModule.forChild([{
            path: '',
            component: InvestPortfolioComponent
        }])
    ],
    declarations: [InvestPortfolioComponent]
})
export class InvestPortFolioPageModule { }