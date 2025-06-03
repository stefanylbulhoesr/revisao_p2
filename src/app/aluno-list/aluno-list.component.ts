import { Component, inject } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-aluno-list',
  imports: [CommonModule, MatTableModule],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.css'
})
export class AlunoListComponent {
  private service = inject(AlunoService);
  alunos: Aluno[] = [];
  displayedColumns = ['id', 'nome', 'nota'];


  constructor() {
    this.service.listar().subscribe(alunos => this.alunos = alunos);
  }
}
