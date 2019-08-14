import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EnderecoModel } from './enderedo-model';
import { EnderecoServiceService } from './endereco-service.service';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: [
    './form-endereco.component.css',
    '../form-orcamento.component.css'
  ]
})

export class FormEnderecoComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private endService: EnderecoServiceService) { }

  end: FormGroup;

  ngOnInit() {
    this.end = this.fb.group({
      cep: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      pontoReferencia: ['']
    })
  }

  onSubmit(end) {
    let endModel: EnderecoModel = new EnderecoModel().builder(
      this.end.get("cep").value,
      this.end.get("cidade").value,
      this.end.get("bairro").value,
      this.end.get("logradouro").value,
      this.end.get("numero").value,
      this.end.get("pontoReferencia").value);
    this.endService.cadastrar(endModel).subscribe(data => console.log("request sucessfuly"));
  }

  ap=false;

  apartamento(event){
    console.log(event);
    this.ap = event.checked;
  }
}