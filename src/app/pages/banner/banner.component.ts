import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {BannerModel} from '../../shared/model';
import {PageDataService} from '../../shared';
import {BannerService} from '../../shared/services/firebase-api';
import {SelectionModel} from '@angular/cdk/collections';
import {NewBannerComponent} from './new-banner/new-banner.component';
import {DialogService} from '../../components';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  displayedColumns: string[] = ['check', 'name', 'cateId', 'img'];
  dataSource: MatTableDataSource<BannerModel>;
  selection = new SelectionModel<BannerModel>(false, []);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bService: BannerService,
              private pageService: PageDataService,
              private dialog: MatDialog,
              private dialogService: DialogService,
              private snackBar: MatSnackBar) {
    this.bindData();
  }

  bindData() {
    this.pageService.getSingleList<BannerModel>(this.bService).then(r => {
      this.dataSource = new MatTableDataSource(r);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  onCreate() {
    const dialogRef = this.dialog.open(NewBannerComponent, {
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

  onUpdate(event) {
    const banner = this.selection.selected[0];
    const dialogRef = this.dialog.open(NewBannerComponent, {
      width: '500px',
      data: {
        isEdit: true,
        model: banner
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
    const docId = this.selection.selected[0].docId;
    const dialogRef = this.dialogService.confirm('Are you sure to delete it?');
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bService.delete(docId).then(() => this.bindData());
      }
    });
  }

  rowSelection(row) {
    this.selection.toggle(row);
  }

}
