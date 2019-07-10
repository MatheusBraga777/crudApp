import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  formAluno: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private alunoService: AlunoService,
              private router: Router) {}
  
  ngOnInit(): void {
    this.formAluno = this.formBuilder.group({
      nomeAluno: [
        '', // parametro responsável pelo valor(conteúdo do campo), caso adicione um valor será exibido no input
        [
          Validators.required, // validação de campo requerido
          Validators.minLength(4), // validação de valor minimo de caracteres
          Validators.maxLength(150), // validação de valor maximo de caracteres
          Validators.pattern(/^[a-zA-Z]+$/) // validação de tipo de caracteres (somente aceita letras minusculas e maiusculas)
        ]
      ],
      matriculaAluno: [
        '', 
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^[0-9]+$/) // validação de tipo de caracteres (somente aceita números)
        ]
      ],
      emailAluno: [
        '', 
        [
          Validators.required,
          Validators.email // validação de email
        ]
      ]
    });
  }
}

adcAluno() {
  const novoAluno = this.formAluno.getRawValue() as Aluno;

  this.alunoService
  .addAluno(novoAluno)
  .subscribe(
    () => this.router.navigateByUrl('tab3'),
  )
}