import { ActivatedRoute } from '@angular/router';
import { User } from './../model/user.module';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userInfo: any;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject.value);
    this.userInfo =  this.currentUserSubject.value;

  }

  ngOnInit(): void {


  }

}
