import { MartialstatusComponent } from './martialstatus.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
          {
            path: '',
            component: MartialstatusComponent
          }
        ])
      ],
      declarations: [MartialstatusComponent]
})
export class MatialstatusPageModule {}
