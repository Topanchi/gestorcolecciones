import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toast: ToastrService) { }

  showSuccess(message: any, title: any) {
    this._toast.success(message, title);
  }

  showError(message: any, title: any) {
    this._toast.error(message, title);
  }

  showWarning(message: any, title: any) {
    this._toast.warning(message, title);
  }

  showInfo(message: any, title: any) {
    this._toast.info(message, title);
  }
}
