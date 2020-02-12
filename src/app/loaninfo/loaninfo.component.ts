import { ToastController } from '@ionic/angular';
import { UserService } from './../api/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaninfo',
  templateUrl: './loaninfo.component.html',
  styleUrls: ['./loaninfo.component.scss'],
})
export class LoaninfoComponent implements OnInit {
  completeUserinformation: any;
  loanAmount: number;
  interestPaid: number;
  noOfYears: number;

  loanInfoJSON: any;


  constructor(public route: Router, public userService: UserService, public toastCtrl: ToastController) {
    this.completeUserinformation = JSON.parse(localStorage.getItem('registeredUser'));
    console.log(this.completeUserinformation);
  }

  ngOnInit() { }

  proceed() {
    console.log('inside the student loan info');
    this.loanInfoJSON = {
      loanamount: this.loanAmount,
      interestpaid: this.interestPaid,
      noofyears: this.noOfYears
    };
    this.completeUserinformation.push(this.loanInfoJSON);
    console.log(this.completeUserinformation);
    let registerInfo;
    for (let index = 0; index < this.completeUserinformation.length; index++) {
      const registerItem = this.completeUserinformation[index];
      registerInfo = {
        user: this.completeUserinformation[0],
        occupation: this.completeUserinformation[1],
        matarialstatus: this.completeUserinformation[2],
        qualificationstatus: this.completeUserinformation[3],
        countryinfo: this.completeUserinformation[4],
        loaninfo: this.completeUserinformation[5]
      }


    }
    console.log(registerInfo);
    this.userService.createUser(registerInfo).then(result => {
      console.log(result);
      this.route.navigateByUrl('/menu/home');
      this.showToast('Register process completed successfully');
    });


  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }

}
