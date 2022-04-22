import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Gateway} from '../gateway.modal';
import {GatewayService} from '../gateway.service';

@Component({
  selector: 'app-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.css']
})

export class GatewayListComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Gateway>;
  displayedColumns: string[] = ['serialNumber', 'name', 'ipv4', 'options'];
  currentPage = 1;
  pageSize = 5;
  total = 0;
  gateways: Gateway[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gatewayService: GatewayService) {
  }

  ngOnInit(): void {
    this.getGatewayList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getGatewayList(): void {
    this.gatewayService.getGatewayList(this.pageSize, this.currentPage)
      .subscribe(
        res => {
          this.gateways = res.data;
          this.total = res.total;
          this.dataSource = new MatTableDataSource<Gateway>(this.gateways);
          this.dataSource.sort = this.sort;
          this.paginator.length = this.total;
          this.paginator.pageIndex = this.currentPage - 1;
        }, err => {
          console.log(err);
        }
      );
  }

  pageChanged(event: PageEvent): void {
    console.log(event);
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.getGatewayList();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
