import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.module';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;


  constructor(public route: Router, public toastCtrl: ToastController) {
    localStorage.removeItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUserSubject.next(null);
    console.log(' you are successful logged out');
    this.showToast('Your are Successfully Logged Out');
    this.route.navigate(['/menu/home']);

  }

  ngOnInit() {
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }

}
