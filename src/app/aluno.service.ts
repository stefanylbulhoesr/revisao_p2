import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [
    {id: 1, nome: 'Stefany', nota: 10},
    {id: 2, nome: 'Caina', nota: 10},
  ]
  constructor() { }

  adicionar(aluno: Omit<Aluno, 'id'>): void {
    const novo = { ...aluno, id: this.alunos.length + 1};
    this.alunos.push(novo);
  }

  listar(): Observable<Aluno[]>{
    return of(this.alunos);
  }
}

