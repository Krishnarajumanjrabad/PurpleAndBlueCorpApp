import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register.component';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild([
        {
          path: '',
          component: RegisterComponent
        }
      ])
    ],
    declarations: [RegisterComponent]
})
export class RegisterPageModule {}