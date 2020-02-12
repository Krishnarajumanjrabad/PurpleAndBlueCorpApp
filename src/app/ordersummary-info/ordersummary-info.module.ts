import { OrdersummaryInfoComponent } from './ordersummary-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{
            path: '',
            component: OrdersummaryInfoComponent
        }])
    ],
    declarations: [ OrdersummaryInfoComponent]
})
export class OrderSummaryInfoPageModule {}