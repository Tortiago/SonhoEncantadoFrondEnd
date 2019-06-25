import { Component, OnInit } from '@angular/core';

export interface EstadoCivil {
  codEstadoCivil: string;
  descEstadoCivil: string;
}



@Component({
  selector: 'app-form-dados-pessoais',
  templateUrl: './form-dados-pessoais.component.html',
  styleUrls: ['./form-dados-pessoais.component.css']
})
export class FormDadosPessoaisComponent implements OnInit {

  estadoCivil: EstadoCivil[] = [
    { codEstadoCivil: 'solteiro', descEstadoCivil: 'Solteiro (a)' },
    { codEstadoCivil: 'casado', descEstadoCivil: 'Casado (a)' },
    { codEstadoCivil: 'separado', descEstadoCivil: 'Separado (a)' },
    { codEstadoCivil: 'divorciado', descEstadoCivil: 'Divorciado (a)' },
    { codEstadoCivil: 'viuvo', descEstadoCivil: 'Vi\u00FAvo (a)' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
