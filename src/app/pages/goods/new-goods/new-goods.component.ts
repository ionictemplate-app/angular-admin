import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GoodsService, SubCateService} from '../../../shared/services/firebase-api';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GoodsModel, SubCateModel} from '../../../shared/model';

@Component({
  selector: 'app-new-goods',
  templateUrl: './new-goods.component.html',
  styleUrls: ['./new-goods.component.scss']
})
export class NewGoodsComponent implements OnInit {
  goodForm: FormGroup;
  cateList: Array<SubCateModel>;
  selectCate: string;

  constructor(private fb: FormBuilder,
              private goodService: GoodsService,
              private subCateService: SubCateService,
              @Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<NewGoodsComponent>) {
    this.initForm();
  }

  ngOnInit() {
    this.subCateService.getList().subscribe(r => {
      this.cateList = r;
      if (this.data.model) {
        this.selectCate = this.data.model.subCateId;
      }
    });

  }

  initForm() {
    this.goodForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      saleNum: ['', [Validators.required]],
      inventory: ['', [Validators.required]],
      img: '',
    });

    if (this.data.model) {
      this.goodForm.get('id').setValue(this.data.model.id);
      this.goodForm.get('name').setValue(this.data.model.name);
      this.goodForm.get('price').setValue(this.data.model.price);
      this.goodForm.get('saleNum').setValue(this.data.model.saleNum);
      this.goodForm.get('inventory').setValue(this.data.model.inventory);
      this.goodForm.get('img').setValue(this.data.model.img);
    }
  }

  onSave() {
    const model = new GoodsModel();
    model.id = this.data.model ? this.data.model.id : this.goodForm.controls.id.value;
    model.name = this.goodForm.controls.name.value;
    model.subCateId = this.selectCate;
    model.price = this.goodForm.controls.price.value;
    model.inventory = this.goodForm.controls.inventory.value;
    model.img = this.goodForm.controls.img.value;
    if (this.data.model) {
      this.goodService.update(model).then(() => this.dialogRef.close(true));
    } else {
      this.goodService.addModel(model).then(() => this.dialogRef.close(true));
    }
  }
}
