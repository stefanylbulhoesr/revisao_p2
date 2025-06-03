import { Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoForm } from './aluno-form/aluno-form';

export const routes: Routes = [
    {path: '', component: AlunoListComponent},
    {path: 'novo', component: AlunoForm}
];
