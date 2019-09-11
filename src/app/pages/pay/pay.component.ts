import {Component, OnInit, ViewChild} from '@angular/core';
import {PayModel, SubCateModel} from '../../shared/model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PayService} from '../../shared/services/firebase-api';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'img'];
  dataSource = new MatTableDataSource<PayModel>([]);
  selection = new SelectionModel<PayModel>(true, []);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private payService: PayService) {
    this.bindData();
  }

  bindData() {
    this.payService.getList().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  rowSelection(row) {
    this.selection.toggle(row);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: SubCateModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
