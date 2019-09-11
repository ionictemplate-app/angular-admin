import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CateModel} from '../../../shared/model';
import {CateService} from '../../../shared/services/firebase-api';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-cate',
  templateUrl: './new-cate.component.html',
  styleUrls: ['./new-cate.component.scss']
})
export class NewCateComponent implements OnInit {
  bForm: FormGroup;

  constructor(private fb: FormBuilder,
              private cService: CateService,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<NewCateComponent>) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.bForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]]
    });

    if (this.data.model) {
      this.bForm.get('id').setValue(this.data.model.id);
      this.bForm.get('name').setValue(this.data.model.name);
    }
  }

  onSave() {
    const model = new CateModel();
    model.id = this.data.model ? this.data.model.id : this.bForm.controls.id.value;
    model.name = this.bForm.controls.name.value;
    if (this.data.model) {
      this.cService.update(model).then(() => this.dialogRef.close(true));
    } else {
      this.cService.addModel(model).then(() => this.dialogRef.close(true));
    }
  }
}
