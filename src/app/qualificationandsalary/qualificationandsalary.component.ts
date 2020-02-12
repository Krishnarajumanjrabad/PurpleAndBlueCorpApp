import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualificationandsalary',
  templateUrl: './qualificationandsalary.component.html',
  styleUrls: ['./qualificationandsalary.component.scss'],
})
export class QualificationandsalaryComponent implements OnInit {
  qualificationInfoSelection: any;
  salaryInfoSelection: any;
  completeUserinformation: any = [];
  qualificationSalaryJsonInfo: any;


  constructor(public route: Router, public toastCtrl: ToastController) { 
    this.completeUserinformation = JSON.parse(localStorage.getItem('registeredUser'));

    console.log(this.completeUserinformation);
  }

  ngOnInit() {}

  qualificationInfo(event) {
    console.log('build is clicked' + event.target.value);
    this.qualificationInfoSelection = event.target.value;
  }

  salaryInfo(event) {
    console.log('Getting the selection of the qualification event is: ' + event.target.value);
    this.salaryInfoSelection = event.target.value;
  }

  process() {
    console.log('processing and storing the information to array ');
    this.qualificationSalaryJsonInfo = {
      qualification: this.qualificationInfoSelection,
      salaryrange: this.salaryInfoSelection
    };

    this.completeUserinformation.push(this.qualificationSalaryJsonInfo);
    localStorage.setItem('registeredUser', JSON.stringify(this.completeUserinformation));
    this.showToast('Please proceed with next step');
    this.route.navigateByUrl('/menu/countryAndExp');
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000
    }).then(toast => toast.present());
  }

}
