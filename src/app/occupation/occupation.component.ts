import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss'],
})
export class OccupationComponent implements OnInit {
  selectedOption: any;
  occupationValue: any;
  prepareJsonOccupation: any;
  occupation: any;
  completeUserinformation: any = [];

  constructor(public route: Router, public toastCtrl: ToastController) {
    this.completeUserinformation = JSON.parse(localStorage.getItem('registeredUser'));
    console.log(this.completeUserinformation);
  }

  ngOnInit() { }

  process() {

    if (this.occupationValue) {
      console.log('inside the occupation component' + this.occupationValue);
      this.prepareJsonOccupation = {
        occuption: this.occupationValue
      }
    } else {
      this.prepareJsonOccupation = {
        occuption: this.occupation
      }
    }

    this.completeUserinformation.push(this.prepareJsonOccupation);
    localStorage.setItem('registeredUser', JSON.stringify(this.completeUserinformation));
    this.showToast('Please proceed with next step');
    this.route.navigateByUrl('/menu/matarialStatus');

  }


  getGroupSelectionValue(event) {
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
