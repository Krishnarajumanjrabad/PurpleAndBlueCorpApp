import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanorgoal',
  templateUrl: './loanorgoal.component.html',
  styleUrls: ['./loanorgoal.component.scss'],
})
export class LoanorgoalComponent implements OnInit {
  goalSelection: any;
  radioSelected: any;
  urlInfo: any;

  
  constructor(public route: Router) { }


  ngOnInit() {}

  proceed(event: any) {
    console.log('Button is clicked' + event.target.value);
    this.goalSelection = event.target.value;

    // tslint:disable-next-line: triple-equals
    if (this.goalSelection === 'studentLoan') {
     console.log('insied the student loan');
     this.urlInfo = '/menu/' + this.goalSelection;
     this.route.navigateByUrl(this.urlInfo);
    } else {
     console.log('inside is esle persona goal');
     this.urlInfo = '/menu/' + this.goalSelection;
     this.route.navigateByUrl(this.urlInfo);
    }
  }
}
