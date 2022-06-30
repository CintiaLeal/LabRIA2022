import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoadminComponent } from './documentoadmin.component';

describe('DocumentoadminComponent', () => {
  let component: DocumentoadminComponent;
  let fixture: ComponentFixture<DocumentoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
