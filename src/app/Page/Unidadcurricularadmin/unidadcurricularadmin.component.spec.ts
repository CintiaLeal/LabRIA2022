import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadcurricularadminComponent } from './unidadcurricularadmin.component';

describe('UnidadcurricularadminComponent', () => {
  let component: UnidadcurricularadminComponent;
  let fixture: ComponentFixture<UnidadcurricularadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadcurricularadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadcurricularadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
