import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtoSubject$: BehaviorSubject<Produto[]> = new BehaviorSubject<Produto[]>([]);
  public produto$ = this.produtoSubject$.asObservable(); 

  constructor() { 
    timer(2000)
    .subscribe(() => this.produtoSubject$.next([
      { titulo:"Unicornio", detalhe:"Forro de nuvens", quantidade:10, valorUnitario:10.10},
      { titulo:"Pokemon", detalhe:"Forros coloridos", quantidade:10, valorUnitario:10.10},
      { titulo:"Star Wars", detalhe:"Forros pretos e brancos", quantidade:10, valorUnitario:10.10},
      { titulo:"The-flash", detalhe:"Forros vermelhos", quantidade:10, valorUnitario:10.10},
      { titulo:"LoL", detalhe:"Forros lilas", quantidade:10, valorUnitario:10.10}
    ]))
  }

  addProduto(p: Produto){
    this.produtoSubject$.getValue().push(p);
  }

  removeProduto(i: number){
    let produto = this.produtoSubject$.getValue();
    if(i>=0 && i<produto.length)
      produto.splice(i, 1);
  }

  getProduto(i: number): Observable<Produto>{
    return this.produto$.pipe(
      map(produto => (i>=0 && i<produto.length) ? produto[i] : null),
      delay(2000)
    )
  }
  
}
