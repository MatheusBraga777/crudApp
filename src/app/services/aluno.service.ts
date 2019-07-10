/**Serviço de interação com o banco de dados e o app */

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno.models';


const API_URL = 'localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  /* CRUD METHODS */

  //CREATE 
  addAluno(aluno: Aluno){
    return this.http.post(`${API_URL}/alunos`, aluno, httpOptions);
  }

  //RETRIEVE

  getAluno(matricula: number) {
    return this.http.post(`${API_URL}/alunos?matriculas=${matricula}`, httpOptions);
  }

  //UPDATE
  updateAluno(aluno: Aluno) {
    return this.http.put(`${API_URL}/alunos`, aluno, httpOptions);
  }

  //DELETE
  deleteAluno(id: number) {
    return this.http.delete(`${API_URL}/alunos/${id}`, httpOptions);
  }


}
