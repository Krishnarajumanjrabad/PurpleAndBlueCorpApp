import { NgModule } from '@angular/core';

import { LoaninfoComponent } from './loaninfo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoaninfoComponent
            }
        ])
    ],
    declarations: [LoaninfoComponent]
})
export class LoanInfoPageModule { }
