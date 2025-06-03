import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css'
})
export class AlunoForm {
  fb = inject(FormBuilder);
  service = inject(AlunoService);
  router = inject(Router);

  form = this.fb.group({
    nome: ['', Validators.required],
    nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  salvar() {
    if(this.form.valid) {
      const aluno = {
        nome: this.form.value.nome as string,
        nota: this.form.value.nota as number,
      }
      this.service.adicionar(aluno);
      alert('Aluno salvo');
      this.router.navigate(['/']);
    }
  }
}
