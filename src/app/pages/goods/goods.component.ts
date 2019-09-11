import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {GoodsModel, SubCateModel} from '../../shared/model';
import {SelectionModel} from '@angular/cdk/collections';
import {GoodsService, SubCateService} from '../../shared/services/firebase-api';
import {PageDataService} from '../../shared';
import {DialogService} from '../../components';
import {NewGoodsComponent} from './new-goods/new-goods.component';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'cateName', 'inventory', 'place', 'price', 'saleNum', 'img'];
  dataSource = new MatTableDataSource<GoodsModel>([]);
  selection = new SelectionModel<GoodsModel>(true, []);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  goodList: Array<GoodsModel>;
  cateList: Array<SubCateModel>;

  constructor(private goodService: GoodsService,
              private subCateService: SubCateService,
              private pageService: PageDataService,
              private dialogService: DialogService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.bindData();
  }

  bindData() {
    this.pageService.getList([this.goodService.getList(), this.subCateService.getList()]).then(results => {
      this.goodList = results[0];
      this.cateList = results[1];
      this.goodList.forEach(g => g.cateName = this.cateList.find(c => c.id === g.subCateId).name);
      this.dataSource = new MatTableDataSource(this.goodList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  onCreate() {
    const dialogRef = this.dialog.open(NewGoodsComponent, {
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
    const dialogRef = this.dialog.open(NewGoodsComponent, {
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
          this.goodService.delete(c.docId);
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

  checkboxLabel(row?: GoodsModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
