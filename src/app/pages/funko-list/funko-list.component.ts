import { Component, OnInit } from '@angular/core';
import { FunkoEntity } from '../../models/funko-entity';
import { FunkoIronMan } from '../../models/funko-iron-man';
import { IronManFunkoService } from '../../services/iron-man-funko.service';
import { faEye, faEdit, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-funko-list',
  templateUrl: './funko-list.component.html',
  styleUrls: ['./funko-list.component.css']
})
export class FunkoListComponent implements OnInit {
  ironManFunkos: FunkoIronMan[] = [];
  p: number = 1; 
  funkos: FunkoEntity[];
  image: string | ArrayBuffer;
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;
  faAdd = faAdd;

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
    });
  }

}
