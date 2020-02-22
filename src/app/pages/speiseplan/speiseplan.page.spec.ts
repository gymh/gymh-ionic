import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeiseplanPage } from './speiseplan.page';

describe('SpeiseplanPage', () => {
  let component: SpeiseplanPage;
  let fixture: ComponentFixture<SpeiseplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeiseplanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeiseplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
