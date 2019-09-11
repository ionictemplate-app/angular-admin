import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BannerModel, SubCateModel} from '../../../shared/model';
import {BannerService, SubCateService} from '../../../shared/services/firebase-api';
import {Guid} from '../../../shared/Guid';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.scss']
})
export class EditBannerComponent implements OnInit {
  bForm: FormGroup;
  subCateList: Array<SubCateModel>;
  imgUrl: string;
  selectCate: string;

  constructor(private fb: FormBuilder,
              private cateService: SubCateService,
              private bService: BannerService,
              private dialogRef: MatDialogRef<EditBannerComponent>) {
    this.initForm();
    this.cateService.getList().subscribe(r => this.subCateList = r);
  }

  ngOnInit() {
  }

  initForm() {
    this.bForm = this.fb.group({
      cateId: ['', [Validators.maxLength(32)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      img: ''
    });
  }

  down(event) {
    this.imgUrl = event;
    console.log(this.imgUrl);
  }

  onSave() {
    const model = new BannerModel();
    model.img = this.imgUrl;
    model.name = this.bForm.controls.name.value;
    model.cateId = this.selectCate;
    model.id = Guid.create();
    this.bService.addModel(model).then(() => this.dialogRef.close(true));
  }

}
