import { WallatInfoComponent } from './wallat-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({

    imports: [
        FormsModule,
        CommonModule,
        IonicModule,
        RouterModule.forChild([{
            path: '',
            component: WallatInfoComponent
        }])
    ],
    declarations: [ WallatInfoComponent]
})
export class WalletInfoPageModule {}