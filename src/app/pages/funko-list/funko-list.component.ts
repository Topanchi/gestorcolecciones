import { Component, OnInit } from '@angular/core';
import { FunkoIronMan } from '../../models/funko-iron-man';
import { IronManFunkoService } from '../../services/iron-man-funko.service';

@Component({
  selector: 'app-funko-list',
  templateUrl: './funko-list.component.html',
  styleUrls: ['./funko-list.component.css']
})
export class FunkoListComponent implements OnInit {
  ironManFunkos: FunkoIronMan[] = [];
  p: number = 1; 

  constructor(private _ironManFunkoService: IronManFunkoService) { }

  ngOnInit(): void {
    this.obtenerFunkosIronMan();
  }


  private obtenerFunkosIronMan() {
    let s = this._ironManFunkoService.obtenerFunkosIronMan();
    s.snapshotChanges().subscribe(item => {
      this.ironManFunkos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.ironManFunkos.push(x as FunkoIronMan);
      });
      console.log(this.ironManFunkos);
    });
  }



}
