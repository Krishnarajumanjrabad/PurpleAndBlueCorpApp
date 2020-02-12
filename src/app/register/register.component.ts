import { Registeration } from './../model/registeration.module';

import { User } from './../model/user.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public userInformation: User;
  pushPage: any;
  emailAleadyExist = false;
  confirmPasswordIsSame: boolean;
  userList: any;
  userData: User;
  registeration: Registeration;

  completeUserinformation = [];

  constructor(public toastCtrl: ToastController, public userService: UserService, public route: Router) { }

  ngOnInit() { }

  register(form) {

    if (form.value.password !== form.value.confirmPassword) {
      this.showToast('password are not mismatached');
      return null;
    }

    if (form) {
      this.userService.findByEmail(form.value.email).subscribe(res => {
        console.log(res);
        if (res.length > 0) {
          for (const iterator of res) {
            this.userData = iterator;
            if (this.userData.email === form.value.email) {
              console.log('email is already exist');
              this.emailAleadyExist = true;
              this.showToast('email is already registered');
            }
            break;
          }
        } else {
          console.log('inside the else loop');
          this.emailAleadyExist = false;
          const userInform = {
            name: form.value.name,
            email: form.value.email,
            password: form.value.password
          }


          const userInforms = new User();
          userInforms.email = form.value.email;
          userInforms.name = form.value.name;
          userInforms.password = form.value.password;
          console.log(userInforms);
          this.completeUserinformation.push(userInforms);
          console.log(this.registeration);
          localStorage.setItem('registeredUser', JSON.stringify(this.completeUserinformation));
          this.route.navigateByUrl('/menu/occupation');
          this.showToast('Please proceed with next step');

        }

      });
    }
  }

  goLogin() {
    this.route.navigateByUrl('/menu/login');
  }



  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }


}
