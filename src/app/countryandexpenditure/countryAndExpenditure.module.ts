import { NgModule } from '@angular/core';
import { CountryandexpenditureComponent } from './countryandexpenditure.component';
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
            component: CountryandexpenditureComponent
        }])
    ],
    declarations: [ CountryandexpenditureComponent]
})
export class CountryAndExpediturePageModule {}