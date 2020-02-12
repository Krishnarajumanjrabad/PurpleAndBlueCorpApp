import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countryandexpenditure',
  templateUrl: './countryandexpenditure.component.html',
  styleUrls: ['./countryandexpenditure.component.scss'],
})
export class CountryandexpenditureComponent implements OnInit {
  expense: any;
  selectedOption: any;
  processCountryAndExpenseJson: any;

  completeUserinformation: any = [];

  constructor(public route: Router, public toastCtrl: ToastController) {
    this.completeUserinformation = JSON.parse(localStorage.getItem('registeredUser'));
    console.log(this.completeUserinformation);
  }

  ngOnInit() { }

  proceed() {
    console.log(' button is clicked');
    if (this.selectedOption && this.expense) {
      this.processCountryAndExpenseJson = {
        country: this.selectedOption,
        expenditure: this.expense
      }
      this.completeUserinformation.push(this.processCountryAndExpenseJson);
      console.log(this.completeUserinformation);
      localStorage.setItem('registeredUser', JSON.stringify(this.completeUserinformation));
      this.showToast('Please proceed with next step');
      this.route.navigateByUrl('/menu/loanOrGoal');
    } else {
      console.log(' please make your approriate selection');
      this.showToast('please make your approriate selection');
    }

  }



  countryInfo(event) {
    if (event && event.target.value) {
      this.selectedOption = event.target.value;
    }
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }
}
