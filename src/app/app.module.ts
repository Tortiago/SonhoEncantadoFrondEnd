import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// forms
import { FormOrcamentoComponent } from './form-orcamento/form-orcamento.component';
import { FormContatoComponent } from './form-orcamento/form-contato/form-contato.component';
import { FormEnderecoComponent } from './form-orcamento/form-endereco/form-endereco.component';
import { FormEndApartamentoComponent } from './form-orcamento/form-endereco/form-end-apartamento/form-end-apartamento.component';
import { FormDadosPessoaisComponent } from './form-orcamento/form-dados-pessoais/form-dados-pessoais.component';
import { FormSimulacaoComponent } from './form-orcamento/form-simulacao/form-simulacao.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EnderecoServiceService } from './form-orcamento/form-endereco/endereco-service.service'
import {NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    FormOrcamentoComponent,
    FormContatoComponent,
    FormEnderecoComponent,
    FormEndApartamentoComponent,
    FormDadosPessoaisComponent,
    FormSimulacaoComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatDatepickerModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    DecimalPipe,
    EnderecoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
