// pregunta1.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number = 0;

  calcularTotal(): void {
    if (this.cantidad > 20) {
      this.total = this.precioUnitario * this.cantidad * 0.9; // 10% de descuento
    } else if (this.cantidad > 10) {
      this.total = this.precioUnitario * this.cantidad * 0.95; // 5% de descuento
    } else {
      this.total = this.precioUnitario * this.cantidad; // Sin descuento
    }
  }
}
