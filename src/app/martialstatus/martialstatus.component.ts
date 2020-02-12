import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-martialstatus',
  templateUrl: './martialstatus.component.html',
  styleUrls: ['./martialstatus.component.scss'],
})
export class MartialstatusComponent implements OnInit {
  newLocal = '/menu/qualAndSal';

  occupationValue:any;
  selectedOption:any;
  occupation: any;
  completeUserinformation: any = [];
  prepareJsonMattialStatus: any;

  constructor(public route: Router, public toastCtrl: ToastController) { 
    this.completeUserinformation = JSON.parse(localStorage.getItem('registeredUser'));
    console.log(this.completeUserinformation);
   }

  ngOnInit() {}

  process() {
    console.log('inside the Matrial Status');
    if (this.occupationValue) {
      console.log('inside the occupation component' + this.occupationValue);
      this.prepareJsonMattialStatus = {
        occuption: this.occupationValue
      }
    } else {
      this.prepareJsonMattialStatus = {
        occuption: this.occupation
      }
    }
    this.completeUserinformation.push(this.prepareJsonMattialStatus);
    console.log(this.completeUserinformation);
    localStorage.setItem('registeredUser', JSON.stringify(this.completeUserinformation));
    this.showToast('Please proceed with next step');
    this.route.navigateByUrl(this.newLocal);
  }

  getGroupSelectionValue(event){
    const val = event.target.value;
    if (event.target.value === 'other') {
      console.log('inside the condition');
      this.selectedOption = true;
      this.occupation = event.target.value;

    } else {
      this.selectedOption = false;
      this.occupation = event.target.value;
    }
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }
}

