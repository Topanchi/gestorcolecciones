import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-funko-overview',
  templateUrl: './funko-overview.component.html',
  styleUrls: ['./funko-overview.component.css']
})
export class FunkoOverviewComponent implements OnInit {
  faAdd = faAdd;

  constructor() { }

  ngOnInit(): void {
  }

}
