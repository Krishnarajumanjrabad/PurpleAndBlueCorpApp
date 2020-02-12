import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalinfoComponent } from './goalinfo.component';

describe('GoalinfoComponent', () => {
  let component: GoalinfoComponent;
  let fixture: ComponentFixture<GoalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalinfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
