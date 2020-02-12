import { User } from './../model/user.module';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo: User;
  form: NgForm;
  activePage: any;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;


  constructor(public toastCtrl: ToastController, public userservice: UserService, public route: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject.value);

  }

  ngOnInit() { }

  processLogin(form) {
    if (form.value) {
      this.userservice.findByLogin(form.value.email, form.value.password).subscribe(res => {
        console.log(res);
        if (res.length > 0) {

          // tslint:disable-next-line: forin
          for (const userResult in res) {
            this.userInfo = res[userResult];
            console.log(this.userInfo);
          }
          localStorage.setItem('currentUser', JSON.stringify(this.userInfo));
          this.currentUserSubject.next(this.userInfo);
          console.log('valid user');
          this.showToast('valid user');
          return this.route.navigate(['/menu/home']);
        } else {
          console.log('invalid user');
          this.showToast('invalid user, please try again');
        }
      });
    }
  }



  goToRegister() {
    this.route.navigateByUrl('/menu/register');
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }

}
