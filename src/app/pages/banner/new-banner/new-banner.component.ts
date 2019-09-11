import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BannerModel, SubCateModel} from '../../../shared/model';
import {BannerService, SubCateService} from '../../../shared/services/firebase-api';
import {Guid} from '../../../shared/Guid';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-banner',
  templateUrl: './new-banner.component.html',
  styleUrls: ['./new-banner.component.scss']
})
export class NewBannerComponent implements OnInit {
  bForm: FormGroup;
  subCateList: Array<SubCateModel>;
  selectCate: string;

  constructor(private fb: FormBuilder,
              private cateService: SubCateService,
              private bService: BannerService,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<NewBannerComponent>) {
    this.initForm();
    this.cateService.getList().subscribe(r => {
      this.subCateList = r;
      if (this.data.model) {
        this.selectCate = this.data.model.cateId;
      }
    });
  }

  ngOnInit() {
  }

  initForm() {
    this.bForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      img: ''
    });

    if (this.data.model) {
      this.bForm.get('name').setValue(this.data.model.name);
      this.bForm.get('img').setValue(this.data.model.img);
    }
  }

  onSave() {
    const model = new BannerModel();
    model.img = this.bForm.controls.img.value;
    model.name = this.bForm.controls.name.value;
    model.cateId = this.selectCate;
    model.id = this.data.model ? this.data.model.id : this.bForm.controls.id.value;
    if (this.data.model) {
      this.bService.update(model).then(() => this.dialogRef.close(true));
    } else {
      this.bService.addModel(model).then(() => this.dialogRef.close(true));
    }
  }

}
