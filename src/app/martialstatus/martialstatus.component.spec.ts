import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MartialstatusComponent } from './martialstatus.component';

describe('MartialstatusComponent', () => {
  let component: MartialstatusComponent;
  let fixture: ComponentFixture<MartialstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartialstatusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MartialstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
