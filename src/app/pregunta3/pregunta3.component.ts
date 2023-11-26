// pregunta3.component.ts
import { Component, OnInit } from '@angular/core';
import { Pregunta3Service } from './pregunta3.service';
import { Pregunta3 } from './pregunta3';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css']
})
export class Pregunta3Component implements OnInit {

  characters: Pregunta3[] = [];
  displayedColumns: string[] = ["Id", "Name", "Status", "Species"];

  constructor(private pregunta3Service: Pregunta3Service, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.pregunta3Service.listCharactersWithOddId()
      .subscribe(
        (data) => {
          this.characters = data;
        },
        (error) => {
          this.snackBar.open('Error al consumir API Rest', 'OK', { duration: 5000 });
        }
      );
  }
}
