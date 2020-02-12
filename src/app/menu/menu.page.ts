
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.module';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {



  public appPages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Register',
      url: '/menu/register',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/menu/login',
      icon: 'laptop'
    }
  ];

  public postLoginPages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/menu/dashboard',
      icon: 'list'
    },
    {
      title: 'Order Summary',
      url: '/menu/ordersummary',
      icon: 'laptop'
    },
    {
      title: 'Wallet Summary',
      url: '/menu/wallet',
      icon: 'wallet'
    },
    {
      title: 'LogOut',
      url: '/menu/logout',
      icon: 'exit'
    }
  ];

  activePage: any;
  userInfo: any;
  pages: { title: string; url: string; icon: string; }[];
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;


  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.activePage = event.url;
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        console.log(this.currentUserSubject.value);

        if (this.currentUserSubject.value != null) {
          this.pages = this.postLoginPages;
        } else {
          this.pages = this.appPages;
        }
        console.log(this.activePage);
      }
    });


  }

  ngOnInit() {


  }

}
