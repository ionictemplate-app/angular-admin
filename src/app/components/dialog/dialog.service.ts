import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmComponent} from './confirm/confirm.component';
import {AlertComponent} from './alert/alert.component';

@Injectable({providedIn: 'root'})
export class DialogService {
  constructor(private dialog: MatDialog) {
  }

  closeAll() {
    this.dialog.closeAll();
  }

  alert(msg: string) {
    return this.dialog.open(AlertComponent, {
      width: '500px',
      data: {
        message: msg
      }
    });
  }

  confirm(msg: string) {
    return this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: {
        message: msg
      }
    });
  }
}
