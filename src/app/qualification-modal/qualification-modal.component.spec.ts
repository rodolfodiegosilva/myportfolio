import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { QualificationModalComponent } from './qualification-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('QualificationModalComponent', () => {
  let component: QualificationModalComponent;
  let fixture: ComponentFixture<QualificationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NgbActiveModal],
      declarations: [ QualificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
