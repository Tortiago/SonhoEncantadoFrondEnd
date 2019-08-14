import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Tema {
  value: string;
  viewValue: string;
}

export interface TemaGroup {
  name: string;
  tema: Tema[];
}

export interface Hora {
  value: string;
  viewValue: string;
}

export interface HoraGroup {
  name: string;
  hora: Hora[];
}

@Component({
  selector: 'app-form-festa',
  templateUrl: './form-festa.component.html',
  styleUrls: ['./form-festa.component.css']
})
export class FormFestaComponent implements OnInit {

  minDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  temaDecoracaoControl = new FormControl();
  temaGroups: TemaGroup[] = [
    {
      name:'Misto',
      tema: [
        { value: 'pkm',       viewValue: 'Pokémon'},
        { value: 'minecraft', viewValue: 'Minecraft'},
        { value: 'harryP',    viewValue: 'Harry Potter' },
        { value: 'safari',    viewValue: 'Safari'}
      ]
    },
    {
      name: 'Meninas',
      tema: [
        { value: 'bailarina', viewValue: 'Bailarina' },
        { value: 'coruja',    viewValue: 'Corujinhas' },
        { value: 'lol',       viewValue: 'LoL' },
        { value: 'mMaravilha', viewValue: 'Mulher Maravilha' },
        { value: 'nuvem',     viewValue: 'Nuvenzinhas' },
        { value: 'princesa',  viewValue: 'Princesa' },
        { value: 'unicornio', viewValue: 'Unicórnio' }
      ]
    },
    {
      name: 'Meninos',
      tema: [
        { value: 'exercito',  viewValue: 'Exército' },
        { value: 'fut',       viewValue: 'Futebol' },
        { value: 'starWars',  viewValue: 'Star Wars' },
        { value: 'flash',     viewValue: 'The Flash' },
        { value: 'vingadores', viewValue: 'Vingadores' }
      ]
    },
  ]  

  hrMontagemControl     = new FormControl();
  hrDesmontagemControl  = new FormControl();
  hrInicioFestaControl   = new FormControl();

  horaGroups: HoraGroup[] = [
    {
      name:'Manhã',
      hora: [
        { value: '9:3',     viewValue: '9:30'},
        { value: '10',      viewValue: '10:00'},
        { value: '10:30',   viewValue: '10:30'},
        { value: '11',      viewValue: '11:00'},
        { value: '11:30',   viewValue: '11:30'},
      ]
    },
    {
      name: 'Tarde',
      hora: [
        { value: '12',      viewValue: '12:00' },
        { value: '12:30',   viewValue: '12:30' },
        { value: '13',      viewValue: '13:00' },
        { value: '13:30',   viewValue: '13:30' },
        { value: '14',      viewValue: '14:00' },
        { value: '14:30',   viewValue: '14:30' },
        { value: '15',      viewValue: '15:00' },
        { value: '15:30',   viewValue: '15:30' },
        { value: '16',      viewValue: '16:00' },
        { value: '16:30',   viewValue: '16:30' },
        { value: '17',      viewValue: '17:00' },
        { value: '17:30',   viewValue: '17:30' },
      ]
    },
  ]  

}
