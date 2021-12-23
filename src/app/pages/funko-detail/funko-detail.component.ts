import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunkoIronMan } from '../../models/funko-iron-man';
import { IronManFunkoService } from '../../services/iron-man-funko.service';

@Component({
  selector: 'app-funko-detail',
  templateUrl: './funko-detail.component.html',
  styleUrls: ['./funko-detail.component.css']
})
export class FunkoDetailComponent implements OnInit {
  public funkoIronMan: FunkoIronMan;
  urlImage: string;

  constructor(private _funkoService: IronManFunkoService,
              private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.obtenerFunkosIronMan(id);
  }

  private obtenerFunkosIronMan(id: string) {
    this._funkoService.obtenerFunkoIronMan(id).valueChanges().subscribe((funko: FunkoIronMan) => {
      console.log(funko);
    });
  }

}
