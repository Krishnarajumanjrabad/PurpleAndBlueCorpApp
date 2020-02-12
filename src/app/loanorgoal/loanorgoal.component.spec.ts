import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanorgoalComponent } from './loanorgoal.component';

describe('LoanorgoalComponent', () => {
  let component: LoanorgoalComponent;
  let fixture: ComponentFixture<LoanorgoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanorgoalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanorgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
