import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
import { LlaverosService } from '../../services/llaveros.service';
import { Llavero } from '../../models/llavero';
import { faEye, faEdit, faTrash, faAdd, faCheckDouble, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-llavero-list',
  templateUrl: './llavero-list.component.html',
  styleUrls: ['./llavero-list.component.css']
})
export class LlaveroListComponent implements OnInit {
  p: number = 1;                      // Settup up pagination variable
  Llavero: Llavero[];                 // Save keys data in Student's array.
  hideWhenNoLlavero: boolean = false; // Hide keys data table when no student.
  noData: boolean = false; 
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;
  faAdd = faAdd;
  faCheckDouble = faCheckDouble;
  faCircleXmark = faCircleXmark;

  constructor(public _llaveroService: LlaverosService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataState(); // Initialize key's list, when component is ready
    let s = this._llaveroService.obtenerLlaveros(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Llavero = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Llavero.push(a as Llavero);
      })
    })
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
