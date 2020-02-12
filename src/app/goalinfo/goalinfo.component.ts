import { User } from './../model/user.module';
import { ToastController } from '@ionic/angular';
import { UserService } from './../api/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goalinfo',
  templateUrl: './goalinfo.component.html',
  styleUrls: ['./goalinfo.component.scss'],
})
export class GoalinfoComponent implements OnInit {
  completeUserinformation: any = [];

  goal: number;
  cost: number;
  expectedTime: number;
  goalInfoJSON: any;


  constructor(public route: Router, public userService: UserService, public toastCtrl: ToastController) {
    this.completeUserinformation = JSON.parse(localStorage.getItem('registeredUser'));
    console.log(this.completeUserinformation);
  }

  ngOnInit() { }

  proceed() {
    console.log('inside the personal loan');
    this.goalInfoJSON = {
      goal: this.goal,
      cost: this.cost,
      expectedtime: this.expectedTime
    };

    this.completeUserinformation.push(this.goalInfoJSON);
    let registerInfo;
    for (let index = 0; index < this.completeUserinformation.length; index++) {
      const registerItem = this.completeUserinformation[index];
      registerInfo = {
        user: this.completeUserinformation[0],
        occupation: this.completeUserinformation[1],
        matarialstatus: this.completeUserinformation[2],
        qualificationstatus: this.completeUserinformation[3],
        countryinfo: this.completeUserinformation[4],
        goalinfo: this.completeUserinformation[5]
      }


    }
    console.log(registerInfo);
    // console.log(userPersit);
    this.userService.createUser(registerInfo).then(result => {
      console.log(result);
      this.route.navigateByUrl('/menu/home');
      this.showToast('Register process completed successfully');
    });

  }

  /* this.userService.createUser(this.completeUserinformation).then(result => {
    console.log(result);
   // this.route.navigateByUrl('/menu/home');
    this.showToast('Register process completed successfully');
  }).catch(err => {
    console.log('error' + err);
    this.showToast('Some error has happened please contact admin');
  });
*/


  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }
}
