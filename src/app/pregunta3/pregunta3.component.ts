import { Component } from '@angular/core';
import { Pregunta3Service } from './pregunta3.service';
import { Pregunta3 } from './pregunta3';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  characters : Pregunta3[] = []
  displayedColumns: string[] = ["id", "url"] 

  constructor(private pregunta3Service : Pregunta3Service,
    private snackBar: MatSnackBar){
  }

  ngOnInit(): void {
    this.pregunta3Service.listaCharacters()
    .subscribe(
      (data) => {
        this.characters=data
      },
      (error) => {
        this.snackBar.open('Error al consumir API Rest', 'OK', {duration: 50000})
      }
    )
  }
}
