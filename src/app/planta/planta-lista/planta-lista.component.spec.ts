import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantaListaComponent } from './planta-lista.component';
import { Planta } from '../../model/planta.model';
import { PlantaService } from '../../services/planta.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('PlantaListaComponent', () => {
  let component: PlantaListaComponent;
  let fixture: ComponentFixture<PlantaListaComponent>;
  let mockPlantas: Planta[];

  beforeEach(async () => {
    mockPlantas = [
      new Planta(1, 'Lengua de vaca', 'Sansevieria', 'Interior', 100, 'Templado', 'Tierra'),
      new Planta(2, 'Chachafruto', 'Schefflera', 'Exterior', 800, 'Todos', 'Sustrato huerto'),
      new Planta(3, 'Espatifilo', 'Spathiphyllum', 'Interior', 60, 'Templado, cálido', 'Tierra orgánica'),
    ];

    const plantaServiceMock = {
      getPlantas: () => of(mockPlantas)
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, PlantaListaComponent],
      providers: [{ provide: PlantaService, useValue: plantaServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe mostrar una tabla con 3 filas más el encabezado', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    const tableHeaders = compiled.querySelectorAll('thead tr th');

    expect(tableHeaders.length).toBeGreaterThan(0);
    expect(tableRows.length).toBe(3);
  });

  it('debe contar correctamente plantas de interior y exterior', () => {
    expect(component.totalInterior).toBe(2);
    expect(component.totalExterior).toBe(1);
  });
});
