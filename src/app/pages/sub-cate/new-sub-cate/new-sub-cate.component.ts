import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubCateModel} from '../../../shared/model';
import {SubCateService} from '../../../shared/services/firebase-api';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-sub-cate',
  templateUrl: './new-sub-cate.component.html',
  styleUrls: ['./new-sub-cate.component.scss']
})
export class NewSubCateComponent implements OnInit {
  subForm: FormGroup;

  constructor(private fb: FormBuilder,
              private subCateService: SubCateService,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<NewSubCateComponent>) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.subForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      img: ''
    });

    if (this.data.model) {
      this.subForm.get('id').setValue(this.data.model.id);
      this.subForm.get('name').setValue(this.data.model.name);
      this.subForm.get('img').setValue(this.data.model.img);
    }
  }

  onSave() {
    const model = new SubCateModel();
    model.name = this.subForm.controls.name.value;
    model.id = this.data.model.id;
    model.img = this.subForm.controls.img.value;
    if (this.data.model) {
      this.subCateService.update(model).then(() => this.dialogRef.close(true));
    } else {
      this.subCateService.addModel(model).then(() => this.dialogRef.close(true));
    }
  }

}
