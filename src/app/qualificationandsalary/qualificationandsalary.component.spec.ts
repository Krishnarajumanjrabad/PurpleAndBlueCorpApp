import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualificationandsalaryComponent } from './qualificationandsalary.component';

describe('QualificationandsalaryComponent', () => {
  let component: QualificationandsalaryComponent;
  let fixture: ComponentFixture<QualificationandsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationandsalaryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualificationandsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
