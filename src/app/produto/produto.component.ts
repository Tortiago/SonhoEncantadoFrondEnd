import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos$: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos$ = this.produtoService.produto$;
  }

}
