import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadCurricularUsuarioComponent } from './unidad-curricular-usuario.component';

describe('UnidadCurricularUsuarioComponent', () => {
  let component: UnidadCurricularUsuarioComponent;
  let fixture: ComponentFixture<UnidadCurricularUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadCurricularUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadCurricularUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
