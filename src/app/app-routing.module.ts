import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { FestaComponent } from './festa/festa.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormOrcamentoComponent } from './form-orcamento/form-orcamento.component';
import { CommonModule } from '@angular/common';
import { ProdutoDetailComponent } from './produto/produto-detail/produto-detail.component';

const routes: Routes = [
  { path: 'contract', component: FormOrcamentoComponent },
  { path: 'product', component: ProdutoComponent },
  { path: 'product/:index', component: ProdutoDetailComponent },
  { path: 'party', component: FestaComponent },
  { path: 'customer', component: ClienteComponent },
  { path: '', pathMatch: 'full', redirectTo: 'contrato'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
