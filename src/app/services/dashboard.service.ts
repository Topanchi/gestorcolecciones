import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Coin } from '../models/coin';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public urlIndicadorCl = environment.urlDolar;
  public urlBitCoin = environment.urlBitCoin;

  constructor(private _http: HttpClient) { }

  obtenerDolar() {
    return this._http.get(this.urlIndicadorCl);
  }

  obtenerBitCoin() {
    return this._http.get<Coin[]>(this.urlBitCoin);
  }
}
