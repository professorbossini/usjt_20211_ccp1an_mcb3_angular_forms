import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];

  salvar(pessoaForm: NgForm): void{
    console.log(pessoaForm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
