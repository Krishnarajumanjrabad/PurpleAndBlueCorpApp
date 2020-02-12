import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryandexpenditureComponent } from './countryandexpenditure.component';

describe('CountryandexpenditureComponent', () => {
  let component: CountryandexpenditureComponent;
  let fixture: ComponentFixture<CountryandexpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryandexpenditureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryandexpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
