import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../models/registro';
import { delay, first, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private readonly API = '/assets/registro.json';  // <----- SO TIRAR O A PRA CONSERTAR O CODIGO
  
  constructor(private httpClient: HttpClient) { } 

  listServices(){
    return this.httpClient.get<Registro[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(registro => console.log(registro))
    );
  }
}
