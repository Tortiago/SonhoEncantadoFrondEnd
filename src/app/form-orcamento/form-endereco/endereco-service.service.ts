import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnderecoModel } from './enderedo-model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoServiceService {

  constructor(private http: HttpClient) {
  }

  cadastrar(endModel: EnderecoModel): Observable<EnderecoModel> {
 
 
 
 
       let httpHearders: HttpHeaders = new HttpHeaders();
          httpHearders.set('Content-Type', 'application/json');
                  console.log()
    return this.http.post<EnderecoModel>("http://localhost:8080/endereco", endModel, {headers: httpHearders}).pipe(
      map(data => data));
  }

}