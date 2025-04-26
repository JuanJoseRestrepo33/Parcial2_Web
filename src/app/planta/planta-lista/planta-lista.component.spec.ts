import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaListaComponent } from './planta-lista.component';

describe('PlantaListaComponent', () => {
  let component: PlantaListaComponent;
  let fixture: ComponentFixture<PlantaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
