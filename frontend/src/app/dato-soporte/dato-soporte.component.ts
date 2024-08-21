import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dato-soporte',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './dato-soporte.component.html',
  styleUrl: './dato-soporte.component.css'
})
export class DatoSoporteComponent {
  //tableData: { name: string; position: string; }[] | undefined;
  tableData = [{ name: 'Mario', position: 'Soporte' },{ name: 'Mario', position: 'Soporte' },{ name: 'Mario', position: 'Soporte' },{ name: 'Mario', position: 'Soporte' },{ name: 'Mario', position: 'Soporte' },{ name: 'Mario', position: 'Soporte' }]

  /*loadData(event: MouseEvent) {
    // Aquí puedes llamar a un servicio o función que obtenga datos desde una base de datos
    this.tableData = [
      { name: 'Mario', position: 'Soporte' },
      // Otros datos pueden ser añadidos aquí o cargados desde una base de datos
    ];
  }*/
}


