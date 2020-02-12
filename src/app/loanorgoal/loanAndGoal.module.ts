import { NgModule } from "@angular/core";
import { LoanorgoalComponent } from './loanorgoal.component';
import { LoaninfoComponent } from './../loaninfo/loaninfo.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{
            path: '',
            component: LoanorgoalComponent
        },
        ])
    ],
    declarations: [ LoanorgoalComponent]
})
export class LoanOrGoalPageModule {}