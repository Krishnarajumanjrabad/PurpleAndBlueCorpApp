import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaninfoComponent } from './loaninfo.component';

describe('LoaninfoComponent', () => {
  let component: LoaninfoComponent;
  let fixture: ComponentFixture<LoaninfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaninfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
