import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1; 
  public fechaHoy = new Date();
  public dolar: any;
  public uf: any;
  public coins: any;
  titles: string[] = ['#', 'Moneda', 'Precio', 'Variaciones', 'Nivel de volumen de 24 hrs'];
  filteredCoints: Coin[] = [];

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.obtenerDolar();
    this.obtenerBitCoin();
  }

  private obtenerDolar() {
   this._dashboardService.obtenerDolar().subscribe(
      (res: any) => {
        this.dolar = res.dolar.valor;
        this.uf = res.uf.valor;
      },
      err => console.log(err)
    ); 
    
  }

  private obtenerBitCoin() {
    this._dashboardService.obtenerBitCoin().subscribe(
      (res: any) => {
        this.coins = res;
        this.filteredCoints = this.coins;
      },
      err => console.log(err)
    );
  }

}
