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
import { NgxMaskModule } from 'ngx-mask';
import { FormFestaComponent } from './form-orcamento/form-festa/form-festa.component';
import { FormAniversarianteComponent } from './form-orcamento/form-aniversariante/form-aniversariante.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FestaComponent } from './festa/festa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailProdutoComponent } from './produto/detail-produto/detail-produto.component';
import { ProdutoDetailComponent } from './produto/produto-detail/produto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOrcamentoComponent,
    FormContatoComponent,
    FormEnderecoComponent,
    FormEndApartamentoComponent,
    FormDadosPessoaisComponent,
    FormSimulacaoComponent,
    CadastroComponent,
    FormFestaComponent,
    FormAniversarianteComponent,
    MenuComponent,
    ProdutoComponent,
    ClienteComponent,
    FestaComponent,
    PageNotFoundComponent,
    DetailProdutoComponent,
    ProdutoDetailComponent
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
