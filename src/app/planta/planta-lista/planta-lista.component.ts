import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaService } from '../../services/planta.service';
import { Planta } from '../../model/planta.model';

@Component({
  selector: 'app-planta-lista',
  imports: [CommonModule],
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {
  plantas: Planta[] = [];

  constructor(private plantaService: PlantaService) {}

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
    });
  }
}
