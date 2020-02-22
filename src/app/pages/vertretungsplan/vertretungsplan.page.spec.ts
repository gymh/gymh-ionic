import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VertretungsplanPage } from './vertretungsplan.page';

describe('VertretungsplanPage', () => {
  let component: VertretungsplanPage;
  let fixture: ComponentFixture<VertretungsplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertretungsplanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VertretungsplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
