import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
export interface Produtos {
  descItem: string;
  qtdItem: number;
}

@Component({
  selector: 'app-form-simulacao',
  templateUrl: './form-simulacao.component.html',
  styleUrls: ['./form-simulacao.component.css']
})

export class FormSimulacaoComponent implements OnInit {
  calculoPorCrianca = false;
  calculoPorCabana = false;

  dataMinima = new Date();
  dataEscolhida: false;

  habilitaBotaoVerificacao = false;

  dataDisponivel = false;
  dataIndisponivel = false;

  produtosDisponiveis: Produtos[] = [
    { descItem: 'Tenda Gigante', qtdItem: 1 },
    { descItem: 'Cabanas', qtdItem: 0 },
    { descItem: 'Colchonetes grandes', qtdItem: 4 },
    { descItem: 'Colchonetes medios', qtdItem: 4 }
  ]

  constructor() { }

  ngOnInit() {
  }

  metodoDeCalculoPorCrianca(): void {
    this.calculoPorCrianca = true;
    this.calculoPorCabana = false;
  }

  metodoDeCalculoPorCabana(): void {
    this.calculoPorCrianca = false;
    this.calculoPorCabana = true;
  }

  consultaDisponibilidadeData(): void {
    if (this.produtosDisponiveis[0].qtdItem < 1
      && this.produtosDisponiveis[1].qtdItem < 2) {
      this.dataDisponivel = false;
      this.dataIndisponivel = true;
    } else {
      this.dataDisponivel = true;
      this.dataIndisponivel = false;
    }
  }
}
