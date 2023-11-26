import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {
  horasTrabajadas: number = 0;
  salario: number = 0;

  calcularSalario(): void {
    const salarioBase = 16;
    const horasNormales = 40;
    const salarioExtra = 20;

    if (this.horasTrabajadas <= horasNormales) {
      this.salario = this.horasTrabajadas * salarioBase;
    } else {
      const horasNormalesPagadas = horasNormales * salarioBase;
      const horasExtras = this.horasTrabajadas - horasNormales;
      const salarioExtras = horasExtras * salarioExtra;
      this.salario = horasNormalesPagadas + salarioExtras;
    }
  }
}
