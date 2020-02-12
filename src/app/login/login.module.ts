import { LoginComponent } from './login.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
          {
            path: '',
            component: LoginComponent
          }
        ])
      ],
      declarations: [LoginComponent]
})
export class LoginPageModule {}