import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasuserComponent } from './materiasuser.component';

describe('MateriasuserComponent', () => {
  let component: MateriasuserComponent;
  let fixture: ComponentFixture<MateriasuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
