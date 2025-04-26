import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planta } from '../../model/planta.model';
import { PlantaService } from '../../services/planta.service';

@Component({
  selector: 'app-planta-lista',
  imports: [CommonModule],
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {
  plantas: Planta[] = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
      this.totalInterior = this.plantas.filter(p => p.tipo === 'Interior').length;
      this.totalExterior = this.plantas.filter(p => p.tipo === 'Exterior').length;
    });
  }
}
