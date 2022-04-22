import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Gateway} from '../gateway.modal';

@Component({
  selector: 'app-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.css']
})

export class GatewayListComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Gateway>;
  displayedColumns: string[] = ['serialNumber', 'name', 'ipv4', 'options'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const gateways: Gateway[] = [
      { _id: '', serialNumber: 12345678910, name: 'test', ipv4: '192.168.1.1', devices: [] }
    ];
    this.dataSource = new MatTableDataSource<Gateway>(gateways);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
