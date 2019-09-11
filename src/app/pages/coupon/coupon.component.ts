import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {CouponModel} from '../../shared/model';
import {SelectionModel} from '@angular/cdk/collections';
import {CouponsService} from '../../shared/services/firebase-api';
import {PageDataService} from '../../shared';
import {DialogService} from '../../components';
import {NewCouponComponent} from './new-coupon/new-coupon.component';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'img', 'condition', 'useTime'];
  dataSource = new MatTableDataSource<CouponModel>([]);
  selection = new SelectionModel<CouponModel>(true, []);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private couponService: CouponsService,
              private pageService: PageDataService,
              private dialogService: DialogService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.bindData();
  }

  bindData() {
    this.pageService.getSingleList<CouponModel>(this.couponService).then(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  onCreate() {
    const dialogRef = this.dialog.open(NewCouponComponent, {
      width: '500px',
      data: {
        isEdit: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('add success');
        this.bindData();
      }
    });
  }

  onUpdate() {
    const cate = this.selection.selected[0];
    const dialogRef = this.dialog.open(NewCouponComponent, {
      width: '500px',
      data: {
        isEdit: true,
        model: cate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open('edit success');
        this.bindData();
      }
    });
  }

  onDelete() {
    const dialogRef = this.dialogService.confirm('Are you sure to delete it?');
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach(c => {
          this.couponService.delete(c.docId);
        });
        this.bindData();
      }
    });
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

  checkboxLabel(row?: CouponModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
