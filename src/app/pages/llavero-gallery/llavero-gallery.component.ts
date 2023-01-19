import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
import { LlaverosService } from '../../services/llaveros.service';
import { Llavero } from '../../models/llavero';
import { faEye, faEdit, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-llavero-gallery',
  templateUrl: './llavero-gallery.component.html',
  styleUrls: ['./llavero-gallery.component.css']
})
export class LlaveroGalleryComponent implements OnInit {
  p: number = 1; 
  llaveros: Llavero[];
  hideWhenNoLlavero: boolean = false; // Hide keys data table when no student.
  noData: boolean = false; 
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;
  faAdd = faAdd;

  constructor(private _llaveroService: LlaverosService, 
            public toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerLlaveros();
  }

  private obtenerLlaveros() {
    this.dataState(); // Initialize key's list, when component is ready
    let s = this._llaveroService.obtenerLlaveros();
    s.snapshotChanges().subscribe(item => {
      this.llaveros = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.llaveros.push(x as Llavero);
      });
    });
  } 

  dataState() {     
    this._llaveroService.obtenerLlaveros().valueChanges().subscribe(data => {
      if(data.length <= 0){
        this.hideWhenNoLlavero = false;
        this.noData = true;
      } else {
        this.hideWhenNoLlavero = true;
        this.noData = false;
      }
    })
  }

  // Method to delete student object
  deleteLlavero(llavero) {
    if (window.confirm('¿ Seguro que desea eliminar el llavero ?')) { // Asking from user before Deleting student data.
      this._llaveroService.eliminarLlavero(llavero.$key) // Using Delete student API to delete student.
      this.toastr.success(' Llavero eliminado con éxito!'); // Alert message will show up when student successfully deleted.
    }
  }

}
