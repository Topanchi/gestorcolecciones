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

  constructor(private _ironManFunkoService: IronManFunkoService) { }

  ngOnInit(): void {
    this.obtenerFunkosIronMan();
  }


  obtenerFunkosIronMan() {
    throw new Error('Method not implemented.');
  }

}
