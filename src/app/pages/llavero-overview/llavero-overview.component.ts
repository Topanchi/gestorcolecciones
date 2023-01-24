import { Component, OnInit } from '@angular/core';

import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-llavero-overview',
  templateUrl: './llavero-overview.component.html',
  styleUrls: ['./llavero-overview.component.css']
})
export class LlaveroOverviewComponent implements OnInit {
  faAdd = faAdd;

  constructor() { }

  ngOnInit(): void {
  }

}
